// // arrow functions example 1
//var people = ['Mark', 'Alex', 'John', 'Rick'];
//
// // original function
// people.forEach(function (name) {
//   console.log(name);
// });
//
// // arrow function
// people.forEach((name) => console.log(name));
//
// // multi-line arrow function
// people.forEach((name) => {
//   console.log('Welcome');
//   console.log(name)
// });

// // arrow functions example 2
// // original function
// function add(a, b) {
//   return a + b;
// }
//
// // arrow function 1
// // var add = (a, b) => a + b;
//
// // arrow function 2
// var add = (a, b) => { return a + b; }
//
// console.log(add(3, 9));

// arrow function with 'this' binding example
var person = {
  name: 'Mark',
  likes: ['Surfing', 'Programming', 'Hiking'],
  generateGreeter: function () {
    // var that = this;
    //
    // return function () {
    //   console.log(that.name);
    // }

    return () => {
      console.log(this.name);
    }
  },
  showLikes: function () {
    this.likes.forEach((like) => {
      console.log(`${this.name} likes ${like}`);
    });
  }
};

// person.generateGreeter()();
person.showLikes();
