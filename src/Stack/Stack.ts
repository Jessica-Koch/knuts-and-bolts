import Node from "../Node/Node";

class Stack<T extends string | number> {
  public tail?: Node<T>;
  public length: number;

  constructor() {
    this.tail = undefined;
    this.length = 0;
  }

  public push(val: string | number) {
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

  public pop() {
    if (this.length === 1) {
      this.tail = undefined;
      this.length--;
    } else if (this.length > 1) {
      this.tail = this.tail!.prev;
      this.length--;
    }

    return;
  }

  public peek() {
    if (this.tail) {
      return this.tail;
    }
    return;
  }

  public isEmpty() {
    if (this.length === 0) {
      return true;
    }
    return false;
  }

  public size() {
    return this.length;
  }
}
export default Stack;
