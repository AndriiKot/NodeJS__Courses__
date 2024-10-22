const http = require("node:http");
const port = process.env.PORT || 3000;

const requestHandler = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`<div style="background: red; width: 200px; height: 200px;"
             <h1>Test</h1>
           </div>
          `);                       
};

const server = http.createServer(requestHandler);

server.listen(port, () =>
  console.log(`Server started on port ${port}; press Ctrl-C to terminate....`)
);
