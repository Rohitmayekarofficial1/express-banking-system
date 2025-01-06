const LinkedList = require('../data_structures/LinkedList');

class Bank {
    constructor() {
        this.accounts = new LinkedList();
    }

    addAccount(accountNumber, balance) {
        if (this.accounts.find(accountNumber)) {
            throw new Error('Account already exists');
        }
        this.accounts.add({ accountNumber, balance });
        return `Account ${accountNumber} created`;
    }

    transferFunds(fromAccount, toAccount, amount) {
        const from = this.accounts.find(fromAccount); // Find the "from" account
        const to = this.accounts.find(toAccount);   // Find the "to" account
    
        if (!from || !to) {
            throw new Error('Invalid accounts'); // Error if one or both accounts are missing
        }
    
        if (from.balance < amount) {
            throw new Error('Insufficient balance'); // Error if insufficient funds
        }
    
        from.balance -= amount;
        to.balance += amount;
    
        return `Transferred ${amount} from ${fromAccount} to ${toAccount}`;
    }
    

    checkBalance(accountNumber) {
        const account = this.accounts.find(accountNumber); // Find account in LinkedList
        if (!account) {
            throw new Error('Account not found'); // Error if account doesn't exist
        }
        return `Balance for ${accountNumber}: ${account.balance}`; // Return balance
    }
    
}

module.exports = Bank;
