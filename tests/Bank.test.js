const Bank = require('../src/services/Bank');

describe('Bank Transfer Funds', () => {
    let bank;

    beforeEach(() => {
        bank = new Bank();
    });

    test('should throw error if one or both accounts are invalid', () => {
        bank.addAccount('123', 5000);
        expect(() => bank.transferFunds('123', '234', 2000)).toThrow('Invalid accounts');
        expect(() => bank.transferFunds('999', '123', 2000)).toThrow('Invalid accounts');
    });

    test('should throw error if balance is insufficient', () => {
        bank.addAccount('123', 1000);
        bank.addAccount('234', 3000);
        expect(() => bank.transferFunds('123', '234', 2000)).toThrow('Insufficient balance');
    });

    test('should transfer funds correctly between accounts', () => {
        bank.addAccount('123', 5000);
        bank.addAccount('234', 3000);
        const result = bank.transferFunds('123', '234', 2000);

        expect(result).toBe('Transferred 2000 from 123 to 234');
        expect(bank.checkBalance('123')).toBe('Balance for 123: 3000');
        expect(bank.checkBalance('234')).toBe('Balance for 234: 5000');
    });
});
