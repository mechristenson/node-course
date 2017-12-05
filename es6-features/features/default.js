// function sayHello (name = 'World') {
//   console.log('Hello ' + name + '!');
// }
//
// sayHello();
// sayHello('Mark');

function greetUser (user = {name: 'Anonymous'}) {
  console.log('Hello ' + user.name + '!');
}

greetUser();
greetUser({name: 'Mark'});
