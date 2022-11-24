const videos = [
  "pranking my sister, is she Okay (gone wrong)",
  "how to javascript",
  "learning the piano",
  "html basics",
  "css",
  "java",
  "programming",
  "ui/ux",
];

const games = [
  { title: "Mass Effect", rating: 9.5 },
  { title: "League of Legends", rating: 5 },
  { title: "Last of Us", rating: 10 },
  { title: "God of War", rating: 10 },
  { title: "WWE 2K20", rating: 7 },
];

const shortSearch = videos.filter(function (video) {
  return video.length < 10;
});

const highRating = games.filter(function (game) {
  return game.rating > 9;
});

// SOME AND EVERY
const checkRating = games.every(function (game) {
  return game.rating > 8;
});

const someRating = games.some(function (game) {
  return game.rating > 8;
});

console.log(someRating);
