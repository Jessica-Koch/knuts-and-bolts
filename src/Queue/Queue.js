const Node = require('../Node/Node');

function Queue() {
    this.tail = null;
    this.head = null;
    this.length = 0
}

Queue.prototype.enqueue = function(val) {
    const newNode = new Node(val);
    if(this.head && this.tail) {
        this.tail.next = newNode;
        this.tail = newNode;
    } else {
        this.head = newNode;
        this.tail = newNode;
    }
    this.length++;
}

Queue.prototype.dequeue = function() {
    if(this.length === 1) {
        this.head = null;
        this.tail = null;
        this.length--;
    } else if (this.length > 1) {
        this.head = this.head.next;
        this.length--;
    }
}

Queue.prototype.size = function() {
    return this.length;
}

Queue.prototype.isEmpty = function() {
    if(!this.head && !this.tail) return true;

    return false;
}

module.exports = Queue;