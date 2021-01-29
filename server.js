const fs = require("fs/promises");
const express = require("express");
const mustache = require("mustache");
const {extname} = require("path");

const app = express();

app.use(express.static("public"));

const pages = ["", "main", "basic", "test"];
const encoding = "utf8";

async function getComponentHtml() {
  const files = await fs.readdir("./app/components", {encoding});
  const promises = files
    .filter((fn) => extname(fn) === ".html")
    .map(
      async (htmlFileName) =>
        await fs.readFile(`./app/components/${htmlFileName}`, {
          encoding,
        })
    );
  return Promise.all(promises);
}

pages.forEach((page) => {
  app.get(`/${page}`, async (req, res) => {
    if (page === "") page = "main";

    const codemirrorHtml = await fs.readFile("./app/codemirror.html", {
      encoding,
    });

    const pageHtml = await fs.readFile(`./app/components/pages/${page}.html`, {
      encoding,
    });

    const componentHtmlFiles = await getComponentHtml();
    const componentHtml = componentHtmlFiles.join("\n");

    const globals = `window.globals = ${JSON.stringify({
      pages: pages.filter((p) => p),
    })};`;

    const index = await fs.readFile("./app/index.html", {
      encoding: "utf8",
    });

    res.send(
      mustache.render(index, {
        codemirrorHtml,
        componentHtml,
        pageHtml,
        globals,
      })
    );
  });
});
app.use(express.static("app"));

const port = 8000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
