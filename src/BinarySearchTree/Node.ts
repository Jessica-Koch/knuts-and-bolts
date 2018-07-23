class Node {
  value: string | number;
  right?: Node;
  left?: Node;
  constructor(value: string | number) {
    this.value = value;
    this.left = undefined;
    this.right = undefined;
  }
}

export default Node;
