var request = require('request');
var url = "http://api.openweathermap.org/data/2.5/weather?appid=de2644fde34a3f39c7ef8fefca59e4a7&q=Los%20Angeles&units=imperial";

request({
  url: url,
  json: true
}, function (error, response, body) {
  if (error) {
    console.log('Unable to fetch weather');
  } else {
    // console.log(JSON.stringify(body, null, 4));
    console.log('It\'s ' + body.main.temp + ' in ' + body.name);
  }
});

console.log('After request');
