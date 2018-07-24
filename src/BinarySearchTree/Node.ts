class Node<T extends string | number> {
  value: string | number;
  right?: Node<T>;
  left?: Node<T>;
  constructor(value: T) {
    this.value = value;
    this.left = undefined;
    this.right = undefined;
  }
}

export default Node;
