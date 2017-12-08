'use strict';

function greeter() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello world!';

  return message;
}

module.exports = greeter;