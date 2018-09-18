import Node from '../Node/Node';
import { swap } from '../utils/util';

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
    if (this.isDefined(this.tail)) {
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
    if (!this.isDefined(this.head)) return;
    this.deleteValue(this.head.value);
  }

  /**
   * @returns void
   */
  public deleteTail() {
    if (!this.isDefined(this.tail)) return;
    this.deleteValue(this.tail.value);
  }

  /**
   *
   * @param val
   */
  public deleteValue(val: string | number) {
    if (!this.tail && !this.head) return;

    const itemToDelete = this.search(val);
    if (this.isDefined(itemToDelete)) {
      if (itemToDelete.prev && itemToDelete.next) {
        itemToDelete.prev.next = itemToDelete.next;
        itemToDelete.next.prev = itemToDelete.prev;
      }
      this.assignNodeToNextIfPrevUndefined('head', itemToDelete);
      this.assignNodeToNextIfPrevUndefined('tail', itemToDelete);

      this.length--;
    }
  }

  public reverse() {
    let current;
    if (this.head === undefined || this.length === 0) return this;

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
    headOrTail: 'head' | 'tail',
    node: Node<T>
  ) {
    if (headOrTail === 'head' && !node.prev) {
      return (this.head = node.next);
    }
    if (headOrTail === 'tail' && !node.next) {
      return (this.tail = node.prev);
    }
  }

  private isDefined(el: Node<T> | undefined): el is Node<T> {
    return el !== undefined;
  }
}

export default LinkedList;
