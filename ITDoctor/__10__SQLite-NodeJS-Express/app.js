require("dotenv").config();
const express = require("express");
const Article = require("./db.js").Article;
const read = require("node-readability");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("port", port);

// testing
// add
// curl --data "url=http://localhost:3000/articles" http://localhost:3000/articles
// delete
// curl -X DELETE http://localhost:3000/articles/2

app.get("/articles", (req, res, next) => {
  Article.all((err, articles) => {
    if (err) {
      return next(err);
    }
    res.send(articles);
  });
});

app.post("/articles", (req, res, next) => {
  const url = req.body.url;
  read(url, (err, result) => {
    if (err || !result) res.status(500).send("Error downloading article");
    Article.create(
      { title: result.title, content: result.content },
      (err, article) => {
        if (err) return next(err);
        res.send(article);
      }
    );
  });
});

app.get("/articles/:id", (req, res, next) => {
  const id = req.params.id;
  Article.find(id, (err, article) => {
    if (err) {
      return next(err);
    }
    res.send(article);
  });
});

app.delete("/articles/:id", (req, res, next) => {
  const id = req.params.id;
  Article.delete(id, (err) => {
    if (err) {
      return next(err);
    }
    res.status(204).send();
  });
});

app.listen(
  app.get("port"),
  console.log(`Web app available at http://localhost:${port}`)
);

module.exports = app;
