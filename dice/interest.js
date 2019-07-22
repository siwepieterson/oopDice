class BankAccount {
	constructor(accountOwner, accountType, accountNum, balance, fee, interest) {
		this.accountOwner = accountOwner;
		this.accountType = accountType;
		this.accountNum = accountNum;
		this.fee = fee;
		this.balance = balance;
		this.interest = interest;

	} 

	accountInformation() {
		return `Account owner ${this.accountOwner} has the account type ${this.accountType},
		with the account number: ${this.accountNum},
		the account racked up a total of R${this.fee} in banking fees,
		currently has a balance of R${this.balance},
		this account has an interest rate of ${this.interest} percent
	 `
	}
} 
let personW = new BankAccount('yanga', 'cheque', 128596558636, 168956, 895, 12);