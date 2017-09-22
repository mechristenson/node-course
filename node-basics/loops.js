//countDownWhile
function countDownWhile (startingPoint, stoppingPoint) {
  if (startingPoint >= stoppingPoint) {
    while (startingPoint >= stoppingPoint) {
      console.log('while: ' + startingPoint);
      startingPoint--;
    }
  } else {
    console.log('error: invalid values');
  }
}

//countDownFor
function countDownFor (startingPoint, stoppingPoint) {
  if (startingPoint >= stoppingPoint) {
    for (; startingPoint >= stoppingPoint; startingPoint--) {
      console.log('for: ' + startingPoint);
    }
  } else {
    console.log('error: invalid values');
  }
}

console.log('countDownFor(10, 0)');
countDownFor(10, 0);

console.log('countDownFor(0, 10)');
countDownFor(0, 10);

console.log('countDownFor(10, 10)');
countDownFor(10, 10);

console.log('countDownWhile(15, 10)');
countDownWhile(15, 10);

console.log('countDownWhile(10, 15)');
countDownWhile(10, 15);

console.log('countDownWhile(15, 15)');
countDownWhile(15, 15);
