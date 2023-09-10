// after installing prompt-sync we call it
const prompt = require("prompt-sync")();

class BankAccount {
  constructor(name, inRate = 1, balance = 0) {
    this.name = name;
    this.inRate = inRate;
    this.balance = balance;
  }

  yieldInterest() {
    this.balance += this.balance * (this.inRate / 100);
    return this;
  }
}

class User {
  // declare a class and give it name User

  constructor(userName, emailAdress) {
    // With the constructor method's parameters, we indicate what needs to be provided
    // now our method has 2 parameters!
    this.name = userName; // and we use the values passed in to set the name attribute
    this.email = emailAdress; // and the email attribute
    this.account1 = new BankAccount();
    this.account2 = new BankAccount();
  }

  makeDeposit(amount) {
    // takes a parameter this is the amount of the deposit

    const account = prompt(
      "which account would you like to use for Depositing: "
    ); // Getting user input from NodeJS using prompt-sync module

    if (account === this.account1.name) {
      this.account1.balance += amount; // the specific user's account1 increases by the amount of the value received
      console.log(
        `>>>>>>>>>>>>>>>you deposit $${amount} at ${account}>>>>>>>>>>>>>>>>>>>>>>`
      );
      return this; // for chaining methods
    } else if (account === this.account2.name) {
      this.account2.balance += amount; // the specific user's account1 increases by the amount of the value received
      console.log(
        `>>>>>>>>>>>>>>>you deposit $${amount} at ${account}>>>>>>>>>>>>>>>>>>>>>>`
      );
      return this; // for chaining methods
    } else {
      console.log(`you don't have an account with this name: ${account}`);
      return this; // for chaining methods
    }
  }

  makeWithdrawal(amount) {
    // takes a parameter this is the amount of the withdrawal

    const account = prompt(
      "which account would you like to use for withdrawal: "
    ); // Getting user input from NodeJS using prompt-sync module

    if (account === this.account1.name) {
      if (this.account1.balance < amount) {
        console.log("Insufficient funds: Charging a $5 fee");
        this.account1.balance -= 5;
      }
      this.account1.balance -= amount; // the specific user's account decreases by the amount of the value received
      console.log(
        `>>>>>>>>>>>>>>>your did a withdrawal of $${amount} at ${account}>>>>>>>>>>>>>>>>>>>>>>`
      );
    } else if (account === this.account2.name) {
      if (this.account2.balance < amount) {
        console.log("Insufficient funds: Charging a $5 fee");
        this.account2.balance -= 5;
      }

      this.account2.balance -= amount; // the specific user's account decreases by the amount of the value received
      console.log(
        `>>>>>>>>>>>>>>>your did a withdrawal of $${amount} at ${account}>>>>>>>>>>>>>>>>>>>>>>`
      );
    } else {
      console.log(`you don't have an account with this name: ${account}`);
      return this; // for chaining methods
    }

    return this; // for chaining methods
  }

  displayBalance() {
    // display this user informations

    console.log("---------------user balance------------");
    // display this user name and balance for account1
    console.log(
      `User: ${this.name}, Balance of ${this.account1.name} is: $${this.account1.balance}`
    );
    // display this user name and balance for account2
    console.log(
      `User: ${this.name}, Balance of ${this.account2.name} is: $${this.account2.balance}`
    );
    return this; // for chaining methods
  }

  transferMoney(user, amount) {
    // takes two parameters: tne name of the receiverand the amount to send

    const account = prompt("which account would you like to use for tranfer: "); // Getting user input from NodeJS using prompt-sync module
    const userAccount = prompt(
      "which user account would you like to use for depositing tranfer: "
    );

    if (account === this.account1.name) {
      this.account1.balance -= amount; // the specific user's account decreases by the amount of the value received
      if (userAccount === user.account1.name) {
        user.account1.balance += amount; // the specific user's account increases by the amount of the value received
      } else if (userAccount === user.account2.name) {
        user.account2.balance += amount; // the specific user's account increases by the amount of the value received
      } else {
        console.log(`you don't have an account with this name: ${account}`);
        return this; // for chaining methods
      }

      console.log("---------------transfer Money------------");
      console.log(`${this.name} sent the amount of ${amount} from ${account} to ${user.name} at ${userAccount}`);
      console.log("---------------Balances after transfer------------");
      console.log(
        `User: ${this.name}, Balance of ${account}: $${this.account1.balance}`
      ); // display this user balance
      console.log(`User: ${user.name}, Balance of ${userAccount}: $${user.account1.balance}`); // display the receiver balance
      return this; // for chaining methods
    } else if (account === this.account2.name) {
      this.account2.balance -= amount; // the specific user's account decreases by the amount of the value received
      user.account2.balance += amount; // the specific user's account increases by the amount of the value received

      console.log("---------------transfer Money------------");
      console.log(`${this.name} sent the amount of ${amount} to ${user.name}`);
      console.log("---------------Balances after transfer------------");
      console.log(`User: ${this.name}, Balance: $${this.account2.balance}`); // display this user balance
      console.log(`User: ${user.name}, Balance: $${user.account2.balance}`); // display the receiver balance
      return this; // for chaining methods
    } else {
      console.log(`you don't have an account with this name: ${account}`);
      return this; // for chaining methods
    }
  }
}

// create user's classes
const nizar = new User("Nizar Jouini", "nizar@gmail.com");
nizar.account1.name = "account 1";
nizar.account2.name = "account 2";
const wael = new User("Wael hajji", "wael@gmail.com");
wael.account1.name = "account 1";
wael.account2.name = "account 2";
const iheb = new User("Iheb TA", "iheb@gmail.com");
iheb.account1.name = "account 1";
iheb.account2.name = "account 2";

// display first user's name and balance
console.log("---------------first balance------------");
nizar.displayBalance();
wael.displayBalance();
iheb.displayBalance();

// use makedeposit method to make deposit
console.log(
  "***************************balance after actions*************************************"
);
nizar
  .makeDeposit(100)
  .makeDeposit(200)
  .makeDeposit(70)
  .makeWithdrawal(50)
  .displayBalance();
// wael
//   .makeDeposit(50)
//   .makeDeposit(300)
//   .makeWithdrawal(130)
//   .makeWithdrawal(50)
//   .displayBalance();
// iheb
//   .makeDeposit(500)
//   .makeWithdrawal(210)
//   .makeWithdrawal(30)
//   .makeWithdrawal(110)
//   .displayBalance();
nizar.transferMoney(wael, 50);
