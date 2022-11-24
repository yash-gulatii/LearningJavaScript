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

const newVideos = videos.map(function (video) {
  return video.length < 10 ? video : "nope";
});

const arrowVideos = videos.map((video) => video.toUpperCase());

// SORT
const items = ["Banana", "Orange", "Apple", "Mango"];
const ratings = [92, 56, 4, 2, 22, 45.6, 10, 80];

// games.sort((a, b) => b.rating - a.rating);

// // Copies
// const sortRatings = [...ratings];
// sortRatings.sort((a, b) => b - a);

// const name = "yashgulati";

// const letters = [...name];

// console.log(letters);

const names = ["yash", "you"];
const otherNames = ["john", "bohn", "jovi"];

const allNames = [...names, ...otherNames];

console.log(allNames);
