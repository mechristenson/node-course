var age = 25;

function printHello () {
  console.log('Hello');
}

var person = {
  name: 'Mark',
  // age: age
  age,
  printHello,
  ['hello' + (3 + 2)]: 'I am here',
  ['hello' + (age + 2)]: 'YOOOOO',
  printAge () {
    console.log(this.age);
  }
};

console.log(person.age);
console.log(person.hello27);
person.printAge();
printHello();
