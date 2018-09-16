import Node from '../Node/Node';

class Queue<T extends string | number> {
  public head?: Node<T>;
  public length: number;
  public tail?: Node<T>;

  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.length = 0;
  }

  public enqueue(val: number | string) {
    const newNode = new Node(val);
    if (this.head && this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  public dequeue() {
    if (this.length > 1 && this.head) {
      this.head = this.head.next;
      this.length--;
    } else if (this.length === 1) {
      this.head = undefined;
      this.tail = undefined;
      this.length--;
    } else if (this.length > 1 && this.head) {
      this.head = this.head.next;
      this.length--;
    }
  }

  public top() {
    if (this.head) {
      return this.head;
    }

    return undefined;
  }

  public size() {
    return this.length;
  }

  public isEmpty() {
    if (!this.head && !this.tail) {
      return true;
    }

    return false;
  }
}

export default Queue;
