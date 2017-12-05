// var locations = [];
//
// locations.push({
//   name: 'Los Angeles',
//   weather: 70
// });
//
// locations.push({
//   name: 'Venus',
//   weather: 864
// });
//
// for (let location of locations) {
//   console.log(`It's ${location.weather} in ${location.name}`);
// }

function averageGrade(...grades) {
  var totalScore = 0;

  for (let grade of grades) {
    totalScore += grade;
  }

  return (totalScore / grades.length);
}

var total = averageGrade(1, 44, 99);
console.log(total);
