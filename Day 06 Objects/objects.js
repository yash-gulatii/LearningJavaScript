// A POINTER -> IT REFERS TO AN OBJECT

// const lists = document.querySelectorAll("li");

// lists.forEach((li) => {
//   li.addEventListener("click", function () {
//     console.log(this);
//   });
// });

const user = {
  name: "yash",
  videos: ["html", "css", "javascript", "react"],
  greet() {
    console.log(`Hello there ${this.name}`);
    this.videos.forEach((video) => {
      console.log(this.name);
    });
  },
};

user.greet();

// const user = {
//   name: "developedbyed",
// };

// const admin = {
//   name: "admin",
// };

// function yell() {
//   console.log(this.name.toUpperCase());
// }

// user.yell = yell;
// admin.yell = yell;

// user.yell();
// admin.yell();
