const sqlite3 = require("sqlite3").verbose();
const dbName = "later.sqlite";
const db = new sqlite3.Database(dbName);

db.serialize(() => {
  const sql = `
    CREATE TABLE IF NOT EXISTS articles
    	(id integer primary key, title, content TEXT)
  `;
  db.run(sql);
});

class Article {
  static all(cb) {
    db.all("SELECT * FROM articles", cd);
  }

  static find(id, cb) {
    db.get("SELECT * FROM articles id = ?", id, cb);
  }

  static create(data, cb) {
    const sql = "INSERT INTO articles(title, content) VALUES (?, ?)";
    db.run(sql, data.title, data.content, cb);
  }

  static delete(id, cd) {
    if (!id) return cb(new Error("Please provide an id"));
    db.run("DELETE FROM artiles WHERE id = ?", id, cb);
  }
}

module.exports = db;
module.exports.Article = Article;
