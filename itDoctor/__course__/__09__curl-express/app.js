require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());                            // body-parser
app.use(express.urlencoded({ extended: true }));   // body-parser

app.set("port", port);

const articles = [
  { title: "Title 1" },
  { title: "Title 2" },
  { title: "Title 3" },
];

app.get("/articles", (req, res, next) => {
  res.send(articles);
});

app.post("/articles", (req, res, next) => {
  const article = { title: req.body.title };
  articles.push(article);
  console.log("Added article " + article.title);
  res.send("ok");
});

app.get("/articles/:id", (req, res, next) => {
  const id = req.params.id;
  console.log("Fetching article " + id);
  res.send(articles[id]);
});

app.delete("/articles/:id", (req, res, next) => {
  const id = req.params.id;
  console.log("Deleting article " + id);
  delete articles[id];
  res.send({ message: "Deleted article " });
});

app.listen(
  app.get("port"),
  console.log(`Web app available at http://localhost:${app.get("port")}`)
);

module.exports = app;
