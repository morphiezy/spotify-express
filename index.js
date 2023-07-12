const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());

const playlists = [
  {
    id: 1,
    song: "Until I Found You",
    artist: "Stephen Sachez",
    url: "https://open.spotify.com/track/0T5iIrXA4p5GsubkhuBIKV?si=d58478ed294440d4",
    thumbnail:
      "https://i.scdn.co/image/ab67616d000048512bf0876d42b90a8852ad6244",
  },
  {
    id: 2,
    song: "In The Stars",
    artist: "Benson Boone",
    url: "https://open.spotify.com/track/1ei3hzQmrgealgRKFxIcWn?si=724869c6b9c54f1d",
    thumbnail:
      "https://i.scdn.co/image/ab67616d00004851786e4e2c43c2897fafabbfb6",
  },
  {
    id: 3,
    song: "How Do I Say Goodbye",
    artist: "Dean Lewis",
    url: "https://open.spotify.com/track/5hnGrTBaEsdukpDF6aZg8a?si=c68012b6c627458a",
    thumbnail:
      "https://i.scdn.co/image/ab67616d00004851bfedccaca3c8425fdc0a7c73",
  },
];

const suggestSongs = [
  {
    id: 4,
    song: "Driver License",
    artist: "Olivia Ridrigo",
    url: "https://open.spotify.com/track/5wANPM4fQCJwkGd4rN57mH?si=f04d34f713394182",
    thumbnail:
      "https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a",
  },
  {
    id: 5,
    song: "Ghost Town",
    artist: "Benson Boone",
    url: "https://open.spotify.com/track/135Lf4Q0CzlMNfOxbEUsLH?si=10df542e94d243b3",
    thumbnail:
      "https://i.scdn.co/image/ab67616d0000b273dc94a17624484c674252385b",
  },
];

app.get("/", (req, res) => {
  res.render("index", { playlists: playlists, suggests: suggestSongs });
});

app.post("/add-song", (req, res) => {
  playlists.push(req.body);
  res.render("index", { playlists: playlists, suggests: suggestSongs });
});

app.delete("/delete-song/:id", (req, res) => {
  const index = playlists.findIndex((song) => song.id === req.params.id);
  playlists.splice(index, 1);
  res.render("index", { playlists: playlists, suggests: suggestSongs });
});

app.listen("3000", () => {
  console.log("server running...");
});
