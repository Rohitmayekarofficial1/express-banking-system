const LinkedList = require('../src/data_structures/LinkedList');

test('should add and find nodes', () => {
    const list = new LinkedList();
    list.add({ accountNumber: '123', balance: 1000 });
    list.add({ accountNumber: '456', balance: 2000 });

    const node = list.find('123');
    expect(node.balance).toBe(1000);

    const missingNode = list.find('789');
    expect(missingNode).toBeNull();
});
