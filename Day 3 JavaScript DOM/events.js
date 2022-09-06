const button = document.querySelector("#submit");
const todoList = document.querySelector("#todo-list");
const todoNr = document.querySelector(".todo-nr b");
const mainTitle = document.querySelector(".main-title");
const nameInput = document.querySelector(".name-input");

const items = todoList.children;

//CLICK, SCROLL, RESIZING THE BROWSER

//AATACH A EVENT LISTENER
button.addEventListener("click", function (e) {
  e.preventDefault();
  const newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.innerText = nameInput.value;
  todoList.appendChild(newItem);
  todoNr.innerText = items.length;
  nameInput.value = "";
  newItem.addEventListener("click", deleteItem);

  console.log(nameInput);
});

function deleteItem(e) {
  e.stopPropagation();
  e.target.remove();
}

todoList.addEventListener("click", function () {
  todoList.classList.toggle("fade");
});
