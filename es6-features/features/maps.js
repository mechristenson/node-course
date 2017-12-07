// var myMap = new Map();
//
// // Set
// myMap.set('name', 'Mark');
//
// // Get
// console.log(myMap.get('name'));
//
// // Has
// myMap.set('age', 26);
// console.log(myMap.has('age'));
//
// // Delete
// myMap.delete('name');
//
// // Clear
// myMap.clear();
//
// // Size
// console.log(myMap.size);
//
// // var user = {name: 'Mark'};
// var user = true;
// myMap.set(user, 'Los Angeles');
// console.log(myMap.get(user));

// var myMap = new Map();
//
// myMap.set(1, 'Mark');
// myMap.set(2, 'Kate');
// myMap.set(3, 'Rick');
//
// console.log([...myMap]);
// console.log(myMap.keys());
// console.log(myMap.values());

// Challenge Area
var location = {name: 'Los Angeles'};
var secondLocation = {name: 'Ventura'};
var weatherMap = new Map();

function setWeather (location, temp) {
  weatherMap.set(location, temp);
}

function printWeather (location) {
  if (weatherMap.has(location)) {
    console.log(`It is ${weatherMap.get(location)} in ${location.name}`);
  } else {
    console.log(`No weather recorded for ${location.name}`);
  }
}

setWeather(location, 70);
printWeather(location);
printWeather(secondLocation);
