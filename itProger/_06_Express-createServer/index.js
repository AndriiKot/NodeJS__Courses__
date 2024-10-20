"use strict";

const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const express = require("express");

const app = express();

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";
const pathTemplate = path.join(__dirname, "templates");

app.get("/", (req, res) => {
  res.sendFile(path.join(pathTemplate, "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(pathTemplate, "about.html"));
});

app.listen(port, () =>
  console.log(
    `Express запущен на http://${host}:${port};
нажмите Ctrl+C для завершения`
  )
);
