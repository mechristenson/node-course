var grades = [100, 50, 75];
var totalGrade = 0;

grades.forEach(function (grade) {
  totalGrade = totalGrade + grade;
  console.log("Current total is " + totalGrade);
});

var average = totalGrade / grades.length;
console.log("Average is " + average);
