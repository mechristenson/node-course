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

class SavingsAccount extends BankAccount {
  deposit (amount) {
    if (super.deposit(amount)) {
      console.log(`Congrats! You saved $${amount}!`);
    }
  }

  withdraw () {
    console.log('Error: You cannot remove funds from this savings account');
  }
}

var savingsAccount = new SavingsAccount(500);
savingsAccount.deposit(100);
savingsAccount.printBalance();
savingsAccount.withdraw(25);
savingsAccount.printBalance();
