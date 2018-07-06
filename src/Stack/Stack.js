const Node = require('../Node/Node');

function Stack() {
    this.head = null;
    this.length = 0;
}

Stack.prototype.push = function(val) {
    const newNode = new Node(val);
    const oldHead = this.head;

    if (oldHead) {
        this.head = newNode;
        this.head.next = oldHead;
    } else {
        this.head = newNode;
    }
    this.length++;
}

Stack.prototype.pop = function() {
    if (this.length === 1) {
        this.head = null;
        this.length--;
    } else if(this.length > 1) {
        this.head = this.head.next;
        this.length--;
    }

    return undefined;
}

Stack.prototype.peek = function() {
    if(this.head) {
        return this.head;
    }
    return undefined;
}

Stack.prototype.isEmpty = function() {
    if(this.length === 0) {
        return true;
    }
    return false;
}

module.exports = Stack;