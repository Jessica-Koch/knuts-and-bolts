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
      heap.insert(2);
      heap.insert(3);
      heap.insert(4);
      heap.insert(5);
      expect(heap.items.length).toBe(5);
      expect(heap.items).toEqual([5, 4, 3, 2, 1]);
    });
  });

  describe("delete", () => {
    test("it should be able to insert an element into the heap", () => {
      heap.insert(1);
      heap.insert(4);
      heap.insert(5);
      heap.insert(2);
      heap.insert(3);
      heap.delete();
      expect(heap.items.length).toBe(4);
      expect(heap.items).toEqual([4, 3, 2, 1]);
    });
  });

  describe("sort", () => {
    // const child = (heap as any).leftChildIndex(0); // workaround to test private function

    test("it sorts when initialized with a list", () => {
      const h = new Heap([1, 2, 3, 4, 5]);
      h.sort();
      expect(h.items).toEqual([5, 4, 3, 2, 1]);
    });
  });
});
