import Heap from "./Heap";

describe("Heap", () => {
  let heap: Heap;
  beforeEach(() => {
    heap = new Heap();
  });

  afterEach(() => {
    heap = new Heap();
  });

  describe("initialization", () => {
    test("starts out empty", () => {
      expect(heap.items.length).toBe(0);
    });
  });

  describe("insert", () => {
    test("it should be able to insert an element into the heap", () => {
      heap.insert(1);
      heap.insert(4);
      heap.insert(5);
      heap.insert(2);
      heap.insert(3);
      expect(heap.items.length).toBe(5);
      expect(heap.items).toEqual([5, 4, 3, 2, 1]);
    });
  });

  // describe("delete", () => {
  //   test("it should be able to insert an element into the heap", () => {
  //     heap.insert(1);
  //     heap.insert(3);
  //     heap.delete(1);
  //     expect(heap.items.length).toBe(1);
  //   });
  // });

  describe("leftChildIndex", () => {
    test("it should return the index of the left child", () => {
      heap.insert(5);
      heap.insert(4);
      heap.insert(3);
      const child = (heap as any).leftChildIndex(0); // workaround to test private function
      expect(child).toBe(1);
    });
  });

  describe("rightChildIndex", () => {
    test("it should return the index of the right child", () => {
      heap.insert(5);
      heap.insert(4);
      heap.insert(3);
      const child = (heap as any).rightChildIndex(0); // workaround to test private function
      expect(child).toBe(2);
    });
  });
});
