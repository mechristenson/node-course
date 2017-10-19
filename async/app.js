var weather = require('./weather.js');
var location = require('./location.js');

var argv = require('yargs')
  .option('location', {
    alias: 'l',
    description: 'user location',
    type: 'string'
  })
  .help('help')
  .argv;

if (typeof argv.location === 'string' && argv.location.length > 0) {
  weather(argv.location, function(currentWeather) {
    console.log(currentWeather);
  });
} else {
  location(function (location) {
    if (location) {
      weather(location.city, function(currentWeather) {
        console.log(currentWeather);
      });
    } else {
      console.log('Unable to guess location');
    }
  });
}
