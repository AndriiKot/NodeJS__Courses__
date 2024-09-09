const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log(req.url);

  res.write("Hello form NodeJS!!!");
  res.end();
});

server.listen(8080, () => {
  console.log("Server listening on port 8080");
});

// nodemon server.js localhost 8080
// or
// nodemon server.js

// or
// node server.js
