class Node<T extends string | number> {
  public key?: string;
  public value?: number;
  public children?: T[];

  public constructor(key?: string, value?: number, children?: T[]) {
    this.key = key;
    this.value = value;
    this.children = children;
  }
}

export default Node;
