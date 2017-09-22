function createAdder (baseNumber) {
  return function (addedNumber) {
    result = baseNumber + addedNumber;
    return result;
  }
}

var addTen = createAdder(10);
console.log(addTen(2));
console.log(addTen(0));
console.log(addTen(-1));
