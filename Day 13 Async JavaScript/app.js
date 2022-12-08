// Async code example

// console.log("Start");

// setTimeout(() => {
//   console.log("we are in the timeout");
// }, 2000);

// const items = [1, 2, 3, 4, 5, 6, 7, 8];

// items.forEach((item) => {
//   console.log(item);
// });

// console.log("End");

console.log("Start");

function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Now we have the data");
      resolve({ userEmail: email });
    }, 5000);
  });
}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["video1", "video2", "video3"]);
    }, 2000);
  });
}

function videoDeatils(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("title of the video");
    }, 2000);
  });
}

// const user = loginUser("yashgulatii007@goomail.com", "123456", (user) => {
//   console.log(user);
//   getUserVideos(user.userEmail, (videos) => {
//     console.log(videos);
//     videoDeatils(videos[0], (title) => {
//       console.log(title);
//     });
//   });
// });

// loginUser("ed@gmail.com", "bubmba")
//   .then((user) => getUserVideos(user.email))
//   .then((videos) => videoDeatils(videos[0]))
//   .then((detail) => console.log(detail));

// Sync

async function displayUser() {
  try {
    const loggedUser = await loginUser("ed@gmail.com", "12343");
    const videos = await getUserVideos(loggedUser.userEmail);
    const detail = await videoDeatils(videos[0]);
    console.log(loggedUser);
    console.log(videos);
    console.log(detail);
  } catch (err) {
    console.log("we could not find the user");
  }
}

displayUser();

console.log("Finish");
