const button = document.querySelector("button");
const header = document.querySelector("h1");

button.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice?t=" + Math.random())
    .then((result) => result.json())
    .then((data) => {
      header.innerText = data.slip.advice;
    });
});
