import Node from '../Node/Node';

class Queue<T extends string | number> {
  head?: Node<T>;
  length: number;
  tail?: Node<T>;

  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.length = 0;
  }

  enqueue(val: number | string) {
    const newNode = new Node(val);
    if (this.head && this.tail) {
      this.tail!.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  dequeue() {
    if (this.length === 1) {
      this.head = undefined;
      this.tail = undefined;
      this.length--;
    } else if (this.length > 1) {
      this.head = this.head!.next;
      this.length--;
    }
  }

  top() {
    if (this.head) return this.head;

    return undefined;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    if (!this.head && !this.tail) return true;

    return false;
  }
}

export default Queue;
