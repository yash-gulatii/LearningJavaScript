// FUNCTIONS -> SPECIAL OBJECT
//  BIND CALL APPLY

const person = {
  firstName: "Yash",
  lastName: "Gulati",
  getName() {
    console.log(this.firstName + " " + this.lastName);
  },
};

function registerUser(country, lang) {
  // Aditional functionallity...
  this.getName();
  console.log(`My Country is ${country} and My Language is ${lang}`);
}

// const register = registerUser.bind(person);
// register("India", "Hindi");

// registerUser.call(person, "India", "Hindi");

registerUser.apply(person, ["India", "Hindi"]);
