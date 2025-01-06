const readline = require('readline-sync');
const Bank = require('../services/Bank');

const bank = new Bank();

const cli = () => {
    while (true) {
        console.log('\n1. Create Account');
        console.log('2. Check Balance');
        console.log('3. Transfer Funds');
        console.log('4. Exit');

        const choice = readline.question('Enter your choice: ');

        try {
            if (choice === '1') {
                const accountNumber = readline.question('Account number: ');
                const balance = parseFloat(readline.question('Initial balance: '));
                console.log(bank.addAccount(accountNumber, balance));
            } else if (choice === '2') {
                const accountNumber = readline.question('Account number: ');
                console.log(bank.checkBalance(accountNumber));
            } else if (choice === '3') {
                const from = readline.question('From account: ');
                const to = readline.question('To account: ');
                const amount = parseFloat(readline.question('Amount: '));
                console.log(bank.transferFunds(from, to, amount));
            } else if (choice === '4') {
                console.log('Thank you!');
                break;
            } else {
                console.log('Invalid choice!');
            }
        } catch (err) {
            console.error(`Error: ${err.message}`);
        }
    }
};

module.exports = cli;
