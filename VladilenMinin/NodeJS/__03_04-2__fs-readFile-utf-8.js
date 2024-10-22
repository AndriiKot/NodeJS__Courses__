const fs = require("node:fs");
const path = require("node:path");

fs.readFile(path.join(__dirname, "hello.txt"), "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
  console.log("The file has been read!");
});
