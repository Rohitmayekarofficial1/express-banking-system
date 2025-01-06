const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    find(accountNumber) {
        let current = this.head;
        while (current) {
            if (current.data.accountNumber === accountNumber) {
                return current.data;
            }
            current = current.next;
        }
        return null;
    }
}

module.exports = LinkedList;
