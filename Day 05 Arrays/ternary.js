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

const newVideos = videos.map(function (video) {
  return video.length < 10 ? video : "nope";
});

console.log(newVideos);
