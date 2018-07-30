import Node from "../Node/Node";

class Stack<T extends string | number> {
  tail?: Node<T>;
  length: number;

  constructor() {
    this.tail = undefined;
    this.length = 0;
  }

  push(val: string | number) {
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

  pop() {
    if (this.length === 1) {
      this.tail = undefined;
      this.length--;
    } else if (this.length > 1) {
      this.tail = this.tail!.prev;
      this.length--;
    }

    return;
  }

  peek() {
    if (this.tail) {
      return this.tail;
    }
    return;
  }

  isEmpty() {
    if (this.length === 0) {
      return true;
    }
    return false;
  }

  size() {
    return this.length;
  }
}
export default Stack;
