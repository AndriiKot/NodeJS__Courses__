const fs = require("node:fs");

fs.mkdir("test", { recursive: true }, (err) => {
  if (err) throw err;
  console.log("Directory created!");
});
