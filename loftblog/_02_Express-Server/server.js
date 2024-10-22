const express = require("express");
const app = express();

const artists = [
  {
    id: 1,
    name: "Metallica",
    genre: "Heavy Metal",
  },
  {
    id: 2,
    name: "AC/DC",
    genre: "Hard Rock",
  },
  {
    id: 3,
    name: "Nirvana",
    genre: "Grunge",
  },
];

app.get("/artists", (req, res) => {
  res.send(artists);
});

app.get("/", (req, res) => {
  res.send("Hello API!");
});

app.get("/artists/:id", (req, res) => {
  const id = req.params.id;
  const artist = artists.find((a) => a.id === +id);
  res.send(artist);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
