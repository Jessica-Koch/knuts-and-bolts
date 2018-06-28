const Node = require('../Node/Node');

function LinkedList () {
  this.tail = undefined;
  this.head = undefined;
  this.length = 0;
};

LinkedList.prototype.addToHead = function(val) {
  const newNode = new Node(val, this.head);
  this.head ? this.head.prev = newNode : this.tail = newNode;

  this.head = newNode;
  this.length++;
}
module.exports = LinkedList;
