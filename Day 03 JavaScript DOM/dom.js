// const collectionItems = document.getElementsByClassName("item");
// const todoList = document.getElementById("todo-list");
// const todoNr = document.getElementsByClassName("todo-nr")[0];

const collectionItems = document.querySelectorAll(".item");
const todoList = document.querySelector("#todo-list");
const todoNr = document.querySelector(".todo-nr");

const newItem = document.createElement("li");
newItem.classList.add("item");
newItem.innerText = "Item 3";

todoList.appendChild(newItem);

//Update the ammount of items that we have
todoNr.innerText = collectionItems.length;

console.log(collectionItems);
