// npm i --save express
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/',(req, res) => {
  res.send("Hello, World from Express!");
}) 

app.listen(port, () => console.log("Server listening on: http://localhost:%s", port))
