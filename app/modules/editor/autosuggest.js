/* global CodeMirror */

import "./showhint.js";
import synopsis from "./synopsis.js";
import Fuse from "https://cdn.jsdelivr.net/npm/fuse.js@6.4.6/dist/fuse.esm.js";

// const opcodes = reject(
//   (s) => s.includes("(") || s.includes(")"),
//   Object.keys(synopsis)(
// );

const opcodes = Object.keys(synopsis);

const fuzzyMatcher = new Fuse(opcodes, {
  shouldSort: false,
  caseSensitive: true,
  threshold: 0.1,
  distance: 10,
});

async function hintFn(cm, callback) {
  const cursor = cm.getDoc().getCursor();
  const tokenData = cm.getTokenAt(cursor);
  const token = tokenData.string || false;
  if (
    !token ||
    cursor.ch !== tokenData.end ||
    token.length < 3 ||
    tokenData.type === "comment"
  ) {
    return;
  }

  const start = tokenData.start;
  const end = tokenData.end;
  const results = (fuzzyMatcher.search(token) || []).slice(0, 50);
  // if there are no matching results or it's the only result
  // and the token matches the suggestion perfectly, there's no
  // reason to display the suggestions list
  if (
    results.length === 0 ||
    (results.length === 1 && results[0].item === token)
  ) {
    return;
  }

  const list = results.reduce(
    (accumulator, result) =>
      accumulator.push(
        {
          className: "",
          text: result.item,
          displayText: result.item,
          from: CodeMirror.Pos(cursor.line, start),
          to: CodeMirror.Pos(cursor.line, end),
        },
        accumulator
      ),
    []
  );
  typeof callback === "function" &&
    callback({
      list,
    });
  // return { list };
  return cm;
  // cm.on("pick", codeMirr => {
  //     console.log("END COMP", codeMirr);
  //     codeMirr.on("pick", (x, y, z) => console.log("PICK", x, y, z));
  // });
}

hintFn.async = true;

CodeMirror.defineOption("autoSuggest", [], function (cm, active) {
  cm.on("cursorActivity", function () {
    // const mode = cm.getModeAt(cm.getCursor());
    const options = {
      completeSingle: false,
      hint: hintFn,
    };
    if (active) {
      cm.showHint(options);
    }
  });
});
