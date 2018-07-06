const Node = require('../Node/Node');

function Stack() {
    this.tail = null;
    this.length = 0;
}

Stack.prototype.push = function(val) {
    const newNode = new Node(val);
    const oldtail = this.tail;

    if (oldtail) {
        this.tail = newNode;
        this.tail.prev = oldtail;
    } else {
        this.tail = newNode;
    }
    this.length++;
}

Stack.prototype.pop = function() {
    if (this.length === 1) {
        this.tail = null;
        this.length--;
    } else if(this.length > 1) {
        this.tail = this.tail.prev;
        this.length--;
    }

    return undefined;
}

Stack.prototype.peek = function() {
    if(this.tail) {
        return this.tail;
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