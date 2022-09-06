// const text = "mango";

// switch (text) {
//   case "banana":
//     console.log("banana-banana");
//     break;
//   case "apple":
//     console.log("apple :(");
//     break;
//   default:
//     console.log("O_O What?");
//     break;
// }

let userInput = prompt("Tell me a Fruit :)");
let convertedValue = userInput.toLowerCase();

switch (convertedValue) {
  case "kiwi":
    alert("Kiwi is the first food invented by the ocean boys");
    break;
  case "banana":
    alert("Banana Banana :-)");
    break;
  case "apple":
    alert(
      "Depending on which apple you buy you can either go bankrupt or eat too much sugar"
    );
    break;
  default:
    alert("What? O_O");
    break;
}
