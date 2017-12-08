class BankAccount {
  constructor (balance) {
    this.balance = typeof balance === 'number' ? balance : 0;
  }

  deposit (amount) {
    if (typeof amount === 'number') {
      this.balance += amount;
      return true;
    } else {
      console.log('Error: Invalid Balance');
      return false;
    }
  }

  withdraw (amount) {
    if (typeof amount === 'number') {
      this.balance -= amount;
      console.log(`Current Balance: ${this.balance}`);
      return true;
    } else {
      console.log('Error: Invalid Balance');
      return false;
    }
  }

  printBalance () {
    console.log(`Current Balance: ${this.balance}`);
  }
}

var account = new BankAccount(100);
account.deposit(100);
account.withdraw(10);
account.printBalance();

var account2 = new BankAccount('1234');
account2.deposit('ten');
account2.withdraw(true);
account2.printBalance();
