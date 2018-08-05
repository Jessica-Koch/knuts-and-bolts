class Node<T extends string | number> {
  public value: string | number;
  public right?: Node<T>;
  public left?: Node<T>;

  public constructor(value: T) {
    this.value = value;
    this.left = undefined;
    this.right = undefined;
  }
}

export default Node;
