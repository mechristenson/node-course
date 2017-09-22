var account = {
	balance: 0
};

// function: deposit(account, amount)
function deposit (account, amount) {
	account.balance += amount;
}

// function: withdraw(account, amount)
function withdraw (account, amount) {
	account.balance -= amount;
}

// function: getBalance(account)
function getBalance (account) {
	return account.balance;
}

deposit(account, 5);
console.log(getBalance(account));
withdraw(account, 4);
console.log(getBalance(account));
deposit(account, 20);
console.log(getBalance(account));
