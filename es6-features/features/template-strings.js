// function greet (name = 'Mark') {
//   console.log('Hello ' + name + '!');
//   console.log(`Hello ${name}!`);
// }
//
// greet();
// greet('Alex');
//
// console.log(`1 + 6 = ${1 + 6}`);
//
// console.log(`Hey,
//
// This kind of looks like an email!
//
// - Mark
//   `);

var person = {
  name: 'Mark',
  age: 26
};

var defaultPerson = {
  name: 'Anonymous',
  age: 0
};

function greetUser (user = defaultPerson) {
  console.log(`Hey ${user.name}, you're ${user.age}`);
};

greetUser();
greetUser(person);
