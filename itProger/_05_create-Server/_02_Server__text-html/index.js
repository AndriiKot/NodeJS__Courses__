"use strict";

const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
        if (err) {
          throw err;
        }
        res.end(data);
      });
    }
  }
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
