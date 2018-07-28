class Node<T extends string | number> {
  value: string | number;
  right?: Node<T>;
  left?: Node<T>;
  prev: any;

  constructor(value: T) {
    this.value = value;
    this.left = undefined;
    this.right = undefined;
    this.prev;
  }
}

export default Node;
