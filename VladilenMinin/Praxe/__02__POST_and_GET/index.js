const http = require("node:http");
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser"); // Import body-parser 2024: 35 000 000 Weekly Doanloads

const server = http.createServer((req, res) => {
  // Parse the body for POST requests
  if (req.method === "POST") {
    bodyParser.urlencoded({ extended: false })(req, res, () => {
      // Form data will be accessible in req.body
      console.log(req.body); // Example: Log the title

      // ... further logic to handle the data ...

      res.end(`<h1>Form data submitted!</h1>`);
    });
  } else if (req.method === "GET") {
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
