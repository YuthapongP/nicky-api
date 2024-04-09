const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3005;

const movies = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Dark Knight",
  "The Godfather: Part II",
  "12 Angry Men",
  "Schindler's List",
  "The Lord of the Rings: The Return of the King",
  "Pulp Fiction",
  "The Good, the Bad and the Ugly",
  "The Lord of the Rings: The Fellowship of the Ring",
];

app.use(express.json());

app.get("/random-movies", (req, res) => {
  let randomMovies = [];
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * movies.length);
    randomMovies.push(movies[randomIndex]);
  }
  res.json(randomMovies);
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/echo", (req, res) => {
  res.json(req.body);
});

app.listen("3005", () => {
  console.log(`Server running on port`);
});

module.exports = app;
