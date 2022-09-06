const videos = [
  "pranking my sister, is she Okay (gone wrong)",
  "how to javascript",
  "learning piano",
  "html basics",
];

const searchTutorial = videos.find(function (video) {
  return video.includes("basics");
});

console.log(searchTutorial);
