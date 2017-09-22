var accounts = [];

function createAccount (account) {
	accounts.push(account);
	return account;
}

function getAccount (username) {
	var userAccount;

	for (var iterator = 0; iterator < accounts.length; iterator++) {
		if (accounts[iterator].username === username) {
			userAccount = accounts[iterator];
		}
	};

	return userAccount;
}

function deposit (account, amount) {
	if (typeof amount === "number") {
		account.balance += amount;
	} else {
		console.log("Error: Invalid input for transaction");
	}
}

function withdraw (account, amount) {
	if (typeof amount === "number") {
		account.balance -= amount;
	} else {
		console.log("Error: Invalid input for transaction");
	}
}

function getBalance (account) {
	return account.balance;
}

function createBalanceGetter (account) {
	return function () {
		return account.balance;
	}
}


var acc1 = createAccount({
	username: 'mark',
	balance: 0
});
var acc2 = createAccount({
	username: 'bark',
	balance: 10
});


var getMarkBalance = createBalanceGetter(getAccount('mark'));

console.log(getMarkBalance());
deposit(getAccount('mark'), 10);
withdraw(getAccount('mark'), 3);
console.log(getMarkBalance());
deposit(getAccount('mark'), "ten");
withdraw(getAccount('mark'), "three");
console.log(getMarkBalance());
deposit(getAccount('mark'), null);
withdraw(getAccount('mark'), null);
console.log(getMarkBalance());
