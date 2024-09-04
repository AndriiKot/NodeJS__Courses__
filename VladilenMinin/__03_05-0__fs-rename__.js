const fs = require("node:fs");
const path = require("node:path");

fs.rename(
  path.join(__dirname, "hello.txt"),
  path.join(__dirname, "renameHello.txt"),
  (err) => {
    if (err) throw err;
    console.log("File renamed!");
  }
);
