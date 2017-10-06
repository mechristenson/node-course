var argv = require("yargs")
  .command('hello', 'greets the user', function (yargs) {
    yargs.options({
      name: {
        demand: true,
        alias: 'n',
        description: 'your first name goes here'
      },
      lastname: {
        demand: true,
        alias: 'l',
        description: 'your last name goes here'
      }
    });
  })
  .help('help')
  .argv;
var command = argv._[0];

console.log(argv);

if (command === 'hello') {
  if (typeof argv.name !== 'undefined') {
    if (typeof argv.lastname !== 'undefined') {
      console.log('Hello ' + argv.name + " " + argv.lastname + "!");
    } else {
      console.log('Hello ' + argv.name + "!");
    }
  } else {
    console.log('Hello World!');
  }
}
