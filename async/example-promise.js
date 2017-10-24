var request = require('request');

function getWeather (location) {
  return new Promise(function (resolve, reject) {
    var encodedLocation = encodeURIComponent(location);
    var url = "http://api.openweathermap.org/data/2.5/weather?appid=de2644fde34a3f39c7ef8fefca59e4a7&units=imperial&q=" + encodedLocation;

    if (!location) {
      reject('No location provided');
    }

    request({
      url: url,
      json: true
    }, function (error, response, body) {
      if (error) {
        reject('Unable to fetch weather');
      } else {
        resolve('It\'s ' + body.main.temp + ' in ' + body.name);
      }
    });
  })
}

getWeather('new york').then(function (currentWeather) {
  console.log(currentWeather);
}, function (error) {
  console.log(error);
});
