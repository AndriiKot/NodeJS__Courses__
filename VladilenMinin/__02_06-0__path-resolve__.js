const path = require("node:path");

console.log("\n\n");
console.log(path.resolve(__dirname, "./test", "second.html")); // C:\Project\IT\___PROJECTS___\_COURSES_\NodeJS\VladilenMinin\test\second.html
console.log(path.resolve(__dirname, "./test", "/second.html")); // C:\second.html
console.log(path.resolve(__dirname, "./test", "./second.html")); // C:\Project\IT\___PROJECTS___\_COURSES_\NodeJS\VladilenMinin\test\second.html
