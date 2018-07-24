class Node<T extends string | number> {
  value: string | number;
  next?: Node<T>;
  prev?: Node<T>;

  constructor(value: T) {
    this.value = value;
    this.next = undefined;
    this.prev = undefined;
  }
}

export default Node;
