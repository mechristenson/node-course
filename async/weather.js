var request = require('request');

module.exports = function (location, callback) {
  var encodedLocation = encodeURIComponent(location);
  var url = "http://api.openweathermap.org/data/2.5/weather?appid=de2644fde34a3f39c7ef8fefca59e4a7&units=imperial&q=" + encodedLocation;

  if (!location) {
     return callback('No location provided');
  }

  request({
    url: url,
    json: true
  }, function (error, response, body) {
    if (error) {
      callback('Unable to fetch weather');
    } else {
      callback('It\'s ' + body.main.temp + ' in ' + body.name);
    }
  });
}
