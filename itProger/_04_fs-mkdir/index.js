"use strict";

const fs = require("node:fs/promises");
const path = require("node:path");

(async () => {
  const folderPath = path.join(__dirname, "someMainFolder/someSubFolder");
  const filePath = path.join(folderPath, "someFile.txt");

  try {
    await fs.mkdir(folderPath, { recursive: true });
    console.log("Папка успешно создана");

    await fs.writeFile(filePath, "Hello, itProger!");
    console.log("Файл успешно создан");
  } catch (err) {
    console.error("Oшибка: ", err);
  }
})();
