// spread operators example 1
// function add (a, b) {
//   return a + b;
// }
//
// var numbers = [4, 22];
//
// console.log(add(1, 4));
// console.log(add(...numbers));

// spread operators example 2
// var groupA = [33, 99];
// var groupB = [11];
// var unified = [0, ...groupA, ...groupB, 100];
//
// unified.push(...[55, 33]);
//
// console.log(unified);

// rest params example 1
// function greetUsers (group, ...names) {
//   names.forEach(function (name) {
//     console.log(`Hello ${name}. You're part of ${group}`);
//   });
// }
//
// greetUsers('Developers', 'Mark', 'Alex', 'John');

// rest params example 2
function adder(base, ...numbers) {
  numbers.forEach( function (number) {
    console.log(`${base} + ${number} = ${base + number}`);
  });
}

adder(2, 3, 5, 10);
