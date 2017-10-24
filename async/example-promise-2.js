function getLocation () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('Los Angeles');
    }, 1000);
  });
}

function getWeather (location) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('Its 78 in ' + location);
    }, 1000);
  });
}

getLocation().then(function (location) {
  return getWeather(location);
}).then(function (currentWeather) {
  console.log(currentWeather);
});
