// var chatRooms = new Set();
//
// // Add
// chatRooms.add('Surfers');
// chatRooms.add('Surfers');
// chatRooms.add('Climbers');
//
// // Size
// console.log(chatRooms.size);
//
// // Has
// console.log(`Does the set have Surfers: ${chatRooms.has('Surfers')}`);
//
// // Delete
// chatRooms.delete('Climbers');
// console.log(chatRooms.size);
//
// // Clear
// chatRooms.clear();
//
// // To Array
// console.log([...chatRooms]);
//
// chatRooms.forEach(function (chatRoom) {
//   console.log(`Found chat room: ${chatRoom}`);
// });

var movies = new Set();

function addMovie (movieTitle) {
  if (movies.has(movieTitle)) {
    console.log(`Error: ${movieTitle} already exists`);
  } else {
    movies.add(movieTitle);
    console.log(`Successfully added: ${movieTitle}`);
  }
};

addMovie('A New Hope');
addMovie('Endless Summer');
addMovie('Endless Summer');
