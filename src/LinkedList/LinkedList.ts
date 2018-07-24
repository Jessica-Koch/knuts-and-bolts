import Node from '../Node/Node';

class LinkedList<T extends string | number> {
  tail?: Node<T>;
  head?: Node<T>;
  length: number;

  constructor() {
    this.tail = undefined;
    this.head = undefined;
    this.length = 0;
  }

  addToHead(val: string | number) {
    const newNode = new Node(val, this.head);
    this.head ? (this.head.prev = newNode) : (this.tail = newNode);

    this.head = newNode;
    this.length++;
  }

  addToTail(val: string | number) {
    const newNode = new Node(val, undefined, this.tail);
    this.tail ? (this.tail.next = newNode) : (this.head = newNode);

    this.tail = newNode;
    this.length++;
  }

  search(searchItem: string | number) {
    if (this.length === 0) {
      return 'List empty';
    }
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === searchItem) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  deleteHead() {
    if (this.head === undefined) return;
    this.head = this.head.next;

    // if old head present, set it to undefined, if not, set the tail to undefined
    this.head ? (this.head.prev = undefined) : (this.tail = undefined);
    this.length--;
  }

  deleteTail() {
    if (this.tail === undefined) return;
    this.tail = this.tail.prev;

    if (this.tail) {
      this.tail.next = undefined;
    } else {
      this.head = undefined;
    }
    this.length--;
  }

  deleteValue(val: string | number) {
    if (!val || (!this.tail && !this.head)) return;
    const itemToDelete = this.search(val);

    if (itemToDelete) {
      itemToDelete.prev.next = itemToDelete.next;
      itemToDelete.next.prev = itemToDelete.prev;
      this.length--;
    }
  }

  reverse() {
    if (this.head === undefined || this.length === 0) return 'List empty';

    let next = undefined;
    let current = this.head;
    this.tail = this.head;

    while (current !== undefined) {
      next = current.next;
      current.next = current.prev;
      current.prev = next;

      if (!next) {
        this.head = current;
      }

      current = next;
    }
    return this;
  }
}

export default LinkedList;
