console.log('Challenge');

function printInTwoSeconds (message) {
  setTimeout(function () {
    console.log(message);
  }, 2000);
}

printInTwoSeconds('Hello async');
