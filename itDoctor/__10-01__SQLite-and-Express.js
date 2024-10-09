require("dotenv").config();
const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const dbName = "later.sqlite";
const db = new sqlite3.Database(dbName);

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("port", port);

// Создание таблицы, если ее нет
db.serialize(() => {
  const sql = `
    CREATE TABLE IF NOT EXISTS articles
    	(id integer primary key, title TEXT, content TEXT)
  `;
  db.run(sql);
});

// Класс для работы с базой данных
class Article {
  static all(cb) {
    db.all("SELECT * FROM articles", cb);
  }

  static find(id, cb) {
    db.get("SELECT * FROM articles WHERE id = ?", id, cb);
  }

  static create(data, cb) {
    const sql = "INSERT INTO articles(title, content) VALUES (?, ?)";
    db.run(sql, data.title, data.content, cb);
  }

  static delete(id, cb) {
    if (!id) return cb(new Error("Please provide an id"));
    db.run("DELETE FROM articles WHERE id = ?", id, cb);
  }
}

// Маршруты
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
