import Queue from './Queue';

describe('Queues', () => {
  let queue: Queue<string | number>;
  beforeEach(() => {
    queue = new Queue();
  });

  afterEach(() => {
    queue = new Queue();
  });
  describe('initialization', () => {
    test('starts out empty', () => {
      expect(queue.length).toBe(0);
      expect(queue.head).toBeUndefined();
    });
  });

  describe('dequeue', () => {
    test('handles null gracefully', () => {
      expect(queue.dequeue()).toBeUndefined();
    });

    test('can remove the sole item from the queue', () => {
      queue.enqueue(100);
      queue.dequeue();
      expect(queue.length).toBe(0);
      expect(queue.head).toBeUndefined();
    });

    test('can remove an item from the queue', () => {
      queue.enqueue(100);
      queue.enqueue(200);
      queue.dequeue();
      expect(queue.length).toBe(1);
      expect(queue.tail!.value).toBe(200);
      expect(queue.head!.value).toBe(200);
    });
  });

  describe('enqueue', () => {
    test('it can add an item to an empty queue', () => {
      queue.enqueue(200);
      expect(queue.length).toBe(1);
      expect(queue.head!.value).toBe(200);
      expect(queue.tail!.value).toBe(200);
    });

    test('it can add an item to the queue', () => {
      queue.enqueue(100);
      queue.enqueue(200);
      queue.enqueue(300);
      expect(queue.length).toBe(3);
      expect(queue.head!.value).toBe(100);
      expect(queue.tail!.value).toBe(300);
    });
  });

  describe('isEmpty', () => {
    test('it returns true if queue is empty', () => {
      expect(queue.isEmpty()).toBe(true);
    });

    test('it returns false if the queue is not empty', () => {
      queue.enqueue(100);
      expect(queue.isEmpty()).toBe(false);
    });
  });

  describe('size', () => {
    test('it returns true if the queue is empty', () => {
      expect(queue.size()).toBe(0);
    });
    test('it returns false if the queue is not empty', () => {
      queue.enqueue(100);
      expect(queue.size()).toBe(1);
    });
  });
});
