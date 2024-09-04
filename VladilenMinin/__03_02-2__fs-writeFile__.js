const fs = require("node:fs");
const path = require("node:path");

fs.writeFile(
  path.join(__dirname, "test", "hello.txt"),
  "Hello, World!",
  (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  }
);
