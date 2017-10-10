var person = {
  name: 'Mark',
  age: 26
};
var personJSON = JSON.stringify(person);

console.log(personJSON);
console.log(typeof personJSON);

var personObject = JSON.parse(personJSON);

console.log(personObject.name);
console.log(typeof personObject);

console.log('Challenge Area');

var animal = '{"name": "Cairo"}';

var animalObject = JSON.parse(animal);

animalObject.age = 10;

var animalJSON = JSON.stringify(animalObject);

console.log(animalJSON);
