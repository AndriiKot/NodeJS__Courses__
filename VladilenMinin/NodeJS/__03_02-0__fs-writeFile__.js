const fs = require("node:fs");

fs.writeFile("hello.txt", "Hello, World!", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});
