require("dotenv").config();
const express = require("express");
const Article = require("./db.js").Article;
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("port", port);

// const articles = [
//   { title: "Title 1" },
//   { title: "Title 2" },
//   { title: "Title 3" },
// ];

app.get("/articles", (req, res, next) => {
  Article.all((err, articles) => {
    if (err) {
      return next(err);
    }
  });
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
  Article.find(id, (err) => {
    if (err) {
      return next(err);
    }
  });
  res.send(articles[id]);
});

app.delete("/articles/:id", (req, res, next) => {
  const id = req.params.id;
  Article.delete(id, (err) => {
    if (err) {
      return next(err);
    }
  });
  res.send({ message: "Deleted article " });
});

app.listen(
  app.get("port"),
  console.log(`Web app available at http://localhost:${port}`)
);

module.exports = app;
