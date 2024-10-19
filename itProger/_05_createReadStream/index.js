"use strict";

const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";
const pathTemplate = path.join(__dirname, "templates");

const serveFile = (filePath, res) => {
  const readStream = fs.createReadStream(filePath);

  res.setHeader("Content-Type", "text/html");

  readStream.on("error", (err) => {
    console.error(err);
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  });

  readStream.pipe(res);
};

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      serveFile(path.join(pathTemplate, "index.html"), res);
    } else if (req.url === "/about") {
      serveFile(path.join(pathTemplate, "about.html"), res);
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
    }
  } else {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Method Not Allowed");
  }
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
