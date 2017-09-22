// function greetUser(name)
//  if exists say hello name
// else say hello world
function greetUser (name) {
  if (typeof name === 'undefined') {
    console.log("Hello World");
  } else {
    console.log("Hello " + name);
  }
}

greetUser("Mark");
greetUser();
