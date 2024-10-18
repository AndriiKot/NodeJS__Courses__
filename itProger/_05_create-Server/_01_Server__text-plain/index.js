"use strict";

const http = require("node:http");
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Hello World!!!\n");
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
