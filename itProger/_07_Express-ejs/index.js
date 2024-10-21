"use strict";

const express = require("express");

const app = express();

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/user/:username", (req, res) => {
  const data = {
    username: req.params.username,
    hobbies: ["Cooking", "Reading", "Swimming"],
  };
  res.render("user", data);
});

app.listen(port, () =>
  console.log(
    `Express запущен на http://${host}:${port};
нажмите Ctrl+C для завершения`
  )
);
