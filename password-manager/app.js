console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();

var argv = require('yargs')
  .command('create', 'creates a new account', function (yargs) {
    yargs.options({
      name: {
        demand: true,
        alias: 'n',
        description: 'account name (e.g. twitter, facebook)',
        type: 'string'
      },
      username: {
        demand: true,
        alias: 'u',
        description: 'account username or email',
        type: 'string'
      },
      password: {
        demand: true,
        alias: 'p',
        description: 'account password',
        type: 'string'
      }
    }).help('help');
  })
  .command('get', 'get an existing account', function (yargs) {
    yargs.options({
      name: {
        demand: true,
        alias: 'n',
        description: 'your account name',
        type: 'string'
      }
    }).help('help');
  })
  .help('help')
  .argv;

var command = argv._[0];

function createAccount (account) {
  var accounts = storage.getItemSync('accounts');

  if (typeof accounts === 'undefined') {
    accounts = [];
  }

  accounts.push(account);
  storage.setItemSync('accounts', accounts);

  return account;
}

function getAccount (accountName) {
  var accounts = storage.getItemSync('accounts');
  var matchedAccount;

  accounts.forEach(function (account) {
    if (account.name === accountName) {
      matchedAccount = account;
    }
  })

  return matchedAccount;
}

if (command === 'create') {
  var createdAccount = createAccount({
    name: argv.name,
    username: argv.username,
    password: argv.password
  });
  console.log('Account created');
  console.log(createdAccount);
} else if (command === 'get') {
  var fetchedAccount = getAccount(argv.name);

  if (typeof fetchedAccount === 'undefined') {
    console.log('Account not found');
  } else {
    console.log('Account found');
    console.log(fetchedAccount);
  }
}
