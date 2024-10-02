const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    if (req.url === "/") {
      fs.readFile(path.join(__dirname, "views", "index.html"), (err, data) => {
        if (err) {
          throw err;
        }
        res.end(data);
      });
    }
    if (req.url === "/about") {
      fs.readFile(path.join(__dirname, "views", "about.html"), (err, data) => {
        if (err) {
          throw err;
        }
        res.end(data);
      });
    }
  }
  if (req.method === "POST") {
    const body = [];

    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

    req.on("data", (chunk) => {
      body.push(Buffer.from(chunk)); // Append chunk.toString();
    });
    req.on("end", () => {
      const data = new URLSearchParams(body.toString()); // !!! new URLSearchParams() !!!
      res.end(`<h1>Form data submitted  Web Server 01!</h1>
        <p>Your message: ${data.get("title")}</p>`);
    });
  }
});

server.listen(port, () =>
  console.log(`Server started on port ${port}; press Ctrl-C to terminate....`)
);
