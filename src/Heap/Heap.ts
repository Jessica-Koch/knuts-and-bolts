import { swap } from '../utils/util';

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
    this.items.shift();
    this.size--;
    this.heapify(this.items, 0, this.size);
  }

  public sort = () => {
    const n = this.items.length;

    for (let i = n / 2 - 1; i >= 0; i--) {
      this.heapify(this.items, n, i);
    }

    for (let i = n - 1; i >= 0; i--) {
      swap(this.items, 0, i);
      this.heapify(this.items, i, 0);
    }
  };

  private buildHeap(i: number) {
    const parentIdx = Math.floor(i / 2);

    if (i <= 0) return;

    if (this.items[i] <= this.items[parentIdx]) return;

    swap(this.items, i, parentIdx);

    this.buildHeap(parentIdx);
  }

  /**
   * Function that compares elements and determines if they are swappable
   * @param arr array
   * @param i current index
   * @param max index of last item in heap
   */
  private heapify(arr: any[], arrSize: number, i: number) {
    let max = i;
    const leftChild = 2 * i + 1;
    const rightChild = leftChild + 1;

    if (leftChild < this.size && this.items[leftChild] > this.items[max]) {
      max = leftChild;
    }

    if (rightChild < this.size && this.items[rightChild] > this.items[max]) {
      max = rightChild;
    }

    if (max === i) return;

    swap(this.items, i, max);
    this.heapify(arr, arrSize, max);
  }
}

export default Heap;
