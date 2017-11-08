var person = {
  name: 'Mark',
  age: 21
}

function updatePerson (obj) {
  // obj = {
  //   name: 'Mark',
  //   age: 26
  // };
  obj.age = 26;
}

updatePerson(person);
console.log(person);

// Array Example
var grades = [15, 88];

function addGrades (gradesArr) {
  gradesArr.push(55);
  // gradesArr = [12, 33, 99];

  // node debug <filename>
  //  cont - continue
  //  repl - test expressions
  //  .exit - quit
  debugger;
}

addGrades(grades);
console.log(grades);
