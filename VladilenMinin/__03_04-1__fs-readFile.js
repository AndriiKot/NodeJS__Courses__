const fs = require("node:fs");
const path = require("node:path");

fs.readFile(path.join(__dirname, "hello.txt"), (err, data) => {
  if (err) throw err;
  console.log(data.toString());
  console.log("The file has been read!");
});
