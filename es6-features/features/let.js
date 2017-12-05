// var x = 0;
//
// if (true) {
//   var x = 12;
//   let x = 12;
//   console.log(x);
// }
//
// console.log(x);

// for (var i = 0; i < 3; i++) {
for (let i = 0; i < 3; i++) {
  console.log(`For loop: i = ${i}`);
}
// console.log(i);

function genCallback() {
  let name = 'Mark';
  return function () {
    console.log(`Hello ${name}`);
  }
}
genCallback()();
