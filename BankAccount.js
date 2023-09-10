class BankAccount {
  constructor(inRate = 1, balance = 0) {
    this.inRate = inRate;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    return this;
  }

  withdraw(amount) {
    if (this.balance < amount) {
      console.log("Insufficient funds: Charging a $5 fee");
      this.balance -= 5;
    }

    this.balance -= amount;

    return this;
  }

  displayAccountInfo() {
    console.log(`Balance: ${this.balance}`);
    return this;
  }

  yieldInterest() {
    this.balance += this.balance * (this.inRate / 100);
    return this;
  }
}

const account1 = new BankAccount();

const account2 = new BankAccount(3, 150)

console.log("************account 1****************")
account1
  .displayAccountInfo()
  .deposit(300)
  .displayAccountInfo()
  .withdraw(200)
  .displayAccountInfo()
  .withdraw(101)
  .displayAccountInfo();

  console.log("************account 2****************")
  account2.displayAccountInfo()
  console.log(`interest Rate ${account2.inRate}`)
