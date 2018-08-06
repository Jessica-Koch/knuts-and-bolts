class Node<T extends string | number> {
  public value: string | number;
  public next?: Node<T>;
  public prev?: Node<T>;

  constructor(value: T, next?: Node<T>, prev?: Node<T>) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

export default Node;
