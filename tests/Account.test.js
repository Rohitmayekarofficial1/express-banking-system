const Account = require('../src/models/Account');

test('should create account with correct properties', () => {
    const account = new Account('123', 1000);
    expect(account.accountNumber).toBe('123');
    expect(account.balance).toBe(1000);
});
