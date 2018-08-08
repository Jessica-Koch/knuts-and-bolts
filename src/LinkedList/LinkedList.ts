import Node from "../Node/Node";

class LinkedList<T extends string | number> {
  public tail?: Node<T>;
  public head?: Node<T>;
  public length: number;

  public constructor() {
    this.tail = undefined;
    this.head = undefined;
    this.length = 0;
  }

  public addToHead(val: string | number) {
    const newNode = new Node(val, this.head);
    if (this.head) {
      this.head.prev = newNode;
      newNode.next = this.head;
    } else {
      this.tail = newNode;
    }

    this.head = newNode;
    this.length++;
  }

  public addToTail(val: string | number) {
    const newNode = new Node(val, undefined, undefined);
    if (this.tail) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    } else {
      this.head = newNode;
    }

    this.tail = newNode;
    this.length++;
  }

  /**
   *
   * @param searchItem Node
   * @returns Node | undefined
   */
  public search(searchItem: string | number) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === searchItem) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }

  /**
   * @returns void
   */
  public deleteHead() {
    if (this.head === undefined) {
      return;
    }
    this.head = this.head.next;

    // if old head present, set it to undefined, if not, set the tail to undefined
    this.head ? (this.head.prev = undefined) : (this.tail = undefined);
    this.length--;
  }

  /**
   * @returns void
   */
  /**
   * @returns void
   */
  public deleteTail() {
    if (this.tail === undefined) {
      return;
    }
    this.tail = this.tail.prev;

    // if old tail present, set it to null, if not, set the head to null
    this.tail ? (this.tail.next = undefined) : (this.head = undefined);
    this.length--;
  }

  /**
   *
   * @param val
   */
  public deleteValue(val: string | number) {
    if (!this.tail && !this.head) {
      return;
    }

    const itemToDelete = this.search(val);
    if (itemToDelete) {
      if (itemToDelete.prev && itemToDelete.next) {
        itemToDelete.prev.next = itemToDelete.next;
        itemToDelete.next.prev = itemToDelete.prev;
      }
      this.assignNodeToNextIfPrevUndefined("head", itemToDelete);
      this.assignNodeToNextIfPrevUndefined("tail", itemToDelete);

      this.length--;
    }
  }

  public reverse() {
    let current;
    if (this.head === undefined || this.length === 0) {
      return this;
    }

    current = this.head;
    let next;

    this.tail = this.head;

    while (current !== undefined) {
      next = current.next;
      current.next = current.prev;
      current.prev = next;

      if (!next) {
        this.head = current;
      }

      current = next;
    }
    return this;
  }

  private assignNodeToNextIfPrevUndefined(
    headOrTail: "head" | "tail",
    node: Node<T>
  ) {
    if (headOrTail === "head" && !node.prev) {
      return (this.head = node.next);
    }
    if (headOrTail === "tail" && !node.next) {
      return (this.tail = node.prev);
    }
  }

}

export default LinkedList;
