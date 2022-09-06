// {
//   // Compound Statement
//   var a = 10;
//   console.log(a);
// }

// if (true) {
//   // Compound Statement
//   var a = 10;
//   console.log(a);
// }

// const c = 100;
// function x() {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// x();
// console.log(c);

// Illegal shadowing
// let a = 20;
// {
//   var a = 200;
// }

// This is not Illegal Shadowing
// let a = 20;
// function x() {
//   var a = 200;
// }

const a = 20;
{
  const a = 100;
  {
    const a = 200;
    console.log(a);
  }
}
