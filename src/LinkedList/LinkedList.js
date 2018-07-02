const Node = require('../Node/Node');

function LinkedList () {
  this.tail = null;
  this.head = null;
  this.length = 0;
};

LinkedList.prototype.addToHead = function(val) {
  const newNode = new Node(val, this.head);
  this.head ? this.head.prev = newNode : this.tail = newNode;

  this.head = newNode;
  this.length++;
}

LinkedList.prototype.addToTail = function(val) {
  const newNode = new Node(val, null, this.tail);
  this.tail ? this.tail.next = newNode : this.head = newNode;

  this.tail = newNode;
  this.length ++;
}

LinkedList.prototype.search = function(searchItem) {
  if(this.length === 0) {return 'List empty'};
  let currentNode = this.head;

  while (currentNode) {
    if(currentNode.value === searchItem) {
      return currentNode.value;
    }
    currentNode = currentNode.next;
  }
  return false;
}

LinkedList.prototype.deleteHead = function() {
  if (this.head === null) return;
  this.head = this.head.next;

  // if old head present, set it to null, if not, set the tail to null
  this.head ? this.head.prev = null : this.tail = null;
  this.length--;
}

LinkedList.prototype.deleteTail = function() {
  if (this.tail === null) return;
  this.tail = this.tail.prev;

  if (this.tail) {
    this.tail.next = null;
  } else {
    this.head = null;
  }
  this.length--;
}

LinkedList.prototype.reverse = function() {
  if(this.head === null || this.length === 0) return 'List empty';

  let prev = null;
  let next = null;
  let current = this.head;

  for(const i in this) {
    // this.head = current.next;
    console.log('current:', current)
    console.log('this.head:', this.head)
  }
}


module.exports = LinkedList;
