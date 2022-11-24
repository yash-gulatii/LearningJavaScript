var x = 1;
a();
b();
console.log("Global: " + x);

function a() {
  var x = 10;
  console.log("Function a: " + x);
}

function b() {
  var x = 100;
  console.log("Function b: " + x);
}
