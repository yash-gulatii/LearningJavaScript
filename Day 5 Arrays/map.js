const videos = [
  "pranking my sister, is she Okay (gone wrong)",
  "how to javascript",
  "html tutorial",
  "learning piano",
];

// videos.forEach(function (video) {
//   console.log(video);
// });

const newVideos = videos.map(function (video) {
  return video;
});

newVideos.push("HEYYY");

console.log(videos);

console.log(newVideos);
