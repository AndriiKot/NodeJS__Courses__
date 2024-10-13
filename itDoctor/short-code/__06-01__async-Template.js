const http = require("node:http");
const fs = require("node:fs");

http.createServer((req, res) => {
    getTitles(res);
  }).listen(8000, "127.0.0.1", () => console.log("listening on 127.0.0.1:8000"));

function getTitles(res) {
  fs.readFile("./title.json", (err, data) => {
    if (err) {
      hadError(err, res);
      return;
    }
    getTemplate(JSON.parse(data), res);
  });
}
function getTemplate(titles, res) {
  fs.readFile("./index.html", (err, data) => {
    if (err) {
      hadError(err, res);
      return;
    }
    formatHtml(titles, data.toString(), res);
  });
}

function formatHtml(titles, tmpl, res) {
  const html = tmpl.replace("%", titles.join("</li><li>"));
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
}

function hadError(err, res) {
  console.error(err);
  res.end("Server Error");
}

// index.html
/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Async JS</title>
  </head>
  <body>
    <h1>Async JS</h1>
    <ul>
      <li>%</li>
    </ul>
  </body>
</html>
*/

// title.json
/*
[
 "Title 1",
 "Title 2",
 "Title 3"
]
*/
