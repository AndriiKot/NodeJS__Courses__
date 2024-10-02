const http = require("node:http");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    const body = [];

    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

    req.on("data", (chunk) => {
      body.push(Buffer.from(chunk)); // Append chunk.toString();
    });
    req.on("end", () => {
      const data = new URLSearchParams(body.toString());  // !!! new URLSearchParams() !!!
      console.log(data.get("title"));                     // !!! data.get()            !!!
      res.end(`<h1>Form data submitted EXAMPLE 01!</h1>`);
    });
  } else if (req.method === "GET") {
    console.log(req.url);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <h1>Form</h1>
      <form action="/" method="POST">
        <input type="text" name="title">
        <button type="submit">Send</button>
      </form>
    `);
  }
});

server.listen(port, () =>
  console.log(`Server started on port ${port}; press Ctrl-C to terminate....`)
);
