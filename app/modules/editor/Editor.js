/* global CodeMirror */
import {editorEvalCode, uncommentLine} from "./utils.js";
import {filenameToCsoundType} from "../utils.js";
import "./csoundMode.js";
import "./autosuggest.js";

const cursorState = {};

const notImplemented = (feat) => console.warn(`${feat} not implemented`);

export default class CodeEditor {
  constructor({docdata}) {
    this.docdata = docdata;
    this.editorRef = null;

    const maybeCsoundFile = filenameToCsoundType(this.docdata.filename);
    const documentType = maybeCsoundFile ? maybeCsoundFile : "txt";

    this.options = {
      autoSuggest: true,
      autoCloseBrackets: true,
      fullScreen: true,
      lineNumbers: true,
      lineWrapping: true,
      matchBrackets: true,
      mode: ["csd", "orc", "sco", "udo"].some((t) => t === documentType)
        ? {name: "csound", documentType}
        : "text/plain",
      viewportMargin: Infinity,
      tabSize: 2,
      indentUnit: 2,
      extraKeys: {
        // noop default keybindings and handle from react
        // all defaults: code-mirror/src/input/keymap.js
        "Ctrl-F": () => {},
        "Cmd-F": () => {},
        "Ctrl-Z": () => {},
        "Cmd-Z": () => {},
        "Shift-Ctrl-Z": () => {},
        "Ctrl-Y": () => {},
        "Shift-Cmd-Z": () => {},
        "Cmd-Y": () => {},
        // todo: move to hot-keys
        "Ctrl-E": () => notImplemented("Ctrl-E"),
        "Ctrl-Enter": () => notImplemented("Ctrl-Enter"),
        "Cmd-E": () => notImplemented("Cmd-E"),
        "Cmd-Enter": () => notImplemented("Cmd-Enter"),
        "Ctrl-;": () => this.toggleComment(),
        "Cmd-;": () => this.toggleComment(),
      },
    };
  }

  toggleComment() {
    this.editorRef && this.editorRef.toggleComment();
  }

  onMount(el) {
    const editor = CodeMirror(el, this.options);

    const currentDocumentValue = this.docdata ? this.docdata.currentValue : "";

    editor.scrollIntoView = () => {
      setTimeout(() => {
        if (
          window[`editor_scroller`] &&
          typeof window[`editor_scroller`].update === "function"
        ) {
          window[`editor_scroller`].update();
        }
      }, 50);
    };
    console.log({currentDocumentValue});
    editor.getDoc().setValue(currentDocumentValue);

    const editorHistory = cursorState[`${this.docdata.uid}:history`];
    if (editorHistory) {
      editor.getDoc().setHistory(editorHistory);
    } else {
      editor.getDoc().clearHistory();
    }

    this.editorRef = editor;

    editor.focus();
    const lastLine =
      cursorState[`${this.docdata.uid}:cursor_pos`]?.["line"] || 0;
    const lastColumn =
      cursorState[`${this.docdata.uid}:cursor_pos`]?.["ch"] || 0;
    editor.setCursor({line: lastLine, ch: lastColumn});
  }

  unMount() {
    notImplemented("unMount");
    const editorWillUnmount = () => {
      if (this.editorRef) {
        cursorState[
          `${this.docdata.uid}:cursor_pos`
        ] = this.editorRef.getCursor();
        cursorState[
          `${this.docdata.uid}:history`
        ] = this.editorRef.getHistory();
      }
    };
  }

  findOrcBlock() {
    const findOrcBlock = () => {
      const value = this.editorRef ? this.editorRef.doc?.getValue() : "";
      const lines = value.split("\n");
      const cursorLine = this.editorRef ? this.editorRef.getCursor() : "";
      const currentLineEndOfBound = uncommentLine(lines[cursorLine]).match(
        /endin|endop/g
      );

      const cursorBoundry = Math.min(
        cursorLine + (currentLineEndOfBound ? 0 : 1),
        lines.length
      );

      let lastBlockLine, lineNumber;

      for (lineNumber = 0; lineNumber < cursorBoundry; lineNumber++) {
        const line = uncommentLine(lines[lineNumber]);
        if (line.match(/instr|opcode/g)) {
          lastBlockLine = lineNumber;
        } else if (line.match(/endin|endop/g)) {
          lastBlockLine = undefined;
        }
      }

      if (lastBlockLine == null) {
        return {
          from: {line: cursorLine, ch: 0},
          to: {line: cursorLine, ch: lines[cursorLine].length},
          evalStr: lines[cursorLine],
        };
      }

      let blockEnd;

      for (
        lineNumber = cursorLine;
        lineNumber < lines.length + 1;
        lineNumber++
      ) {
        if (blockEnd) {
          break;
        }
        const line = uncommentLine(lines[lineNumber]);

        if (line.match(/endin|endop/g)) {
          blockEnd = lineNumber;
        }
      }

      if (!blockEnd) {
        return {
          from: {line: cursorLine, ch: 0},
          to: {line: cursorLine, ch: lines[cursorLine - 1].length},
          evalStr: lines[cursorLine],
        };
      } else {
        return {
          from: {line: lastBlockLine, ch: 0},
          to: {line: blockEnd, ch: lines[blockEnd].length},
          evalStr: lines.slice(lastBlockLine, blockEnd + 1).join("\n"),
        };
      }
    };
  }
}
