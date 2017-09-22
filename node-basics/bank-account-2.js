var accounts = [];

function createAccount (account) {
	accounts.push(account);
	return account;
}

function getAccount (username) {
	var userAccount;

	accounts.forEach(function (account) {
		if (account.username === username) {
			userAccount = account;
		}
	})

	return userAccount;
}

function deposit (account, amount) {
	account.balance += amount;
}

function withdraw (account, amount) {
	account.balance -= amount;
}

function getBalance (account) {
	return account.balance;
}

var acc1 = createAccount({
	username: 'mark',
	balance: 0
});

deposit(acc1, 100);
console.log(getBalance(acc1));
withdraw(acc1, 11);
console.log(getBalance(acc1));

var acc2 = {
	username: 'bark',
	balance: 10
};

console.log(createAccount(acc2));

deposit(getAccount('bark'), 100);
withdraw(getAccount('bark'), 20);
console.log(getBalance(getAccount('bark')));
console.log(accounts);
