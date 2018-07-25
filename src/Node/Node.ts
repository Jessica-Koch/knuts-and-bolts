class Node<T extends string | number> {
  value: string | number;
  next?: Node<T>;
  prev?: Node<T>;

  constructor(value: T, next?: Node<T>, prev?: Node<T>) {
    this.value = value;
    this.next = undefined;
    this.prev = undefined;
  }
}

export default Node;
