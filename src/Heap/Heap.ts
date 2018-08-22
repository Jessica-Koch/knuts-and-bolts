import { swap } from "../utils/util";

class Heap {
  public items: any[];
  public size: number;

  constructor(items?: any[]) {
    this.items = items ? items : [];
    this.size = this.items.length;
  }

  public insert(val: number) {
    this.items[this.size] = val;
    this.size++;

    this.buildHeap(this.size - 1);
  }

  public delete() {
    const arr = this.items.shift();
    this.size--;
    this.buildHeap(arr);
  }

  private buildHeap(i: number) {
    const parentIdx = Math.floor(i / 2);

    if (i <= 0) return;

    if (this.items[i] <= this.items[parentIdx]) return;

    swap(this.items, i, parentIdx);
    this.buildHeap(parentIdx);
  }

  /**
   * Function that compares elements and determines if they are swappable
   * @param i current index
   * @param max index of last item in heap
   */
  private heapify(heap: any[], i: number, max: number) {
    while (i < max) {
      let index = i;

      const leftChild = 2 * i + 1;
      const righChild = leftChild + 1;

      if (leftChild < max && heap[leftChild] > heap[index]) {
        index = leftChild;
      }

      if (righChild < max && heap[righChild] > heap[index]) {
        index = righChild;
      }

      if (index === i) {
        return;
      }

      swap(heap, i, index);

      i = index;
    }
  }
}

export default Heap;
