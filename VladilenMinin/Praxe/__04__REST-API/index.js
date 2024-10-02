const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      fs.readFile(path.join(__dirname, "views", "index.html"), (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
          res.end("Ошибка на сервере.");
          return;
        }
        res.end(data);
      });
    } else if (req.url === "/about") {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      fs.readFile(path.join(__dirname, "views", "about.html"), (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
          res.end("Ошибка на сервере.");
          return;
        }
        res.end(data);
      });
    } else if (req.url === "/api/users") {
      res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
      const users = [
        { name: "Andrii Kot", age: 37 },
        { name: "Alex Kot", age: 25 },
      ];
      res.end(JSON.stringify(users));
    } else {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("404 Not Found");
    }
  } else if (req.method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const data = new URLSearchParams(Buffer.concat(body).toString());
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(`<h1>Form data submitted Web Server 01!</h1>
        <p>Your message: ${data.get("title")}</p>`);
    });
  } else {
    res.writeHead(405, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Метод не разрешен");
  }
});

server.listen(port, () =>
  console.log(`Server started on port ${port}; press Ctrl-C to terminate....`)
);
