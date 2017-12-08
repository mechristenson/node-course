class BankAccount {
  constructor (balance) {
    this.balance = typeof balance === 'number' ? balance : 0;
  }

  set balance (value) {
    this._balance = value;
    this.balanceUpdatedAt = new Date();
  }

  get balance () {
    return this._balance;
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
      return true;
    } else {
      console.log('Error: Invalid Balance');
      return false;
    }
  }

  printBalance () {
    console.log(`Current balance: $${this.balance}. Last updated at: ${this.balanceUpdatedAt}`);
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
