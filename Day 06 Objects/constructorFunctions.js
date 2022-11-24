// Constructor Function

function Todo(name, completed) {
  this.name = name;
  this.completed = completed;
  this.getTodoName = function () {
    console.log(this.name);
  };
}

const todo = new Todo("Buy Eggs", false);
const todo2 = new Todo("Do my homework", false);

// console.log(todo);
// console.log(todo2);

todo.getTodoName();
todo2.getTodoName();
