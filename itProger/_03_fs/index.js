"use strict";

const fs = require("node:fs");
const path = require("node:path");

try {
  fs.writeFileSync(path.join(__dirname, "some.txt"), "Hello, itProger!");
} catch(err) {
  console.error("Oшибка призаписи файла: ", err)
}


try {
  const data = fs.readFileSync(path.join(__dirname, "some.txt"), "utf8");
  console.log('Содержимое файла:');
  console.log(data);
} catch(err) {
  console.error('Ошибка при чтении файла: ', err);
}