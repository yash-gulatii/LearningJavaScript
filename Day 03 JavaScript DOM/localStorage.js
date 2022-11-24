// localStorage.setItem("todo", "Feed the cat");
// localStorage.setItem("user", "Yash");
// localStorage.setItem("todo", "feed myself");

// sessionStorage.setItem("todoList", "session feeding cat");

// const user = localStorage.getItem("user");
// console.log(user);

const todoList3 = {
  todo1: "Feeding the cat",
  todo2: "Feeding Myself",
};

localStorage.setItem("todos", JSON.stringify(todoList3));

const arr = JSON.parse(localStorage.getItem("todos"));
console.log(arr);
