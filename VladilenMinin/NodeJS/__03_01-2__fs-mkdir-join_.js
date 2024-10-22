const fs = require("node:fs");
const path = require("node:path");

fs.mkdir(path.join(__dirname, "test"), { recursive: true }, (err) => {
  if (err) throw new Error(err);
  console.log("Directory created!");
});
