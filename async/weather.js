var request = require('request');
var url = "http://api.openweathermap.org/data/2.5/weather?appid=de2644fde34a3f39c7ef8fefca59e4a7&q=Los%20Angeles&units=imperial";

module.exports = function (callback) {
  request({
    url: url,
    json: true
  }, function (error, response, body) {
    if (error) {
      callback('Unable to fetch weather');
    } else {
      // console.log(JSON.stringify(body, null, 4));
      callback('It\'s ' + body.main.temp + ' in ' + body.name);
    }
  });
}
