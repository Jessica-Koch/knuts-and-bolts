import LinkedList from './LinkedList';

describe('LinkedLists', () => {
  let list: LinkedList<string | number>;

  beforeEach(() => {
    list = new LinkedList();
  });

  afterEach(() => {
    list = new LinkedList();
  });

  test('starts out empty', () => {
    expect(list.length).toBe(0);
    expect(list.tail).toBeUndefined();
    expect(list.head).toBeUndefined();
  });

  describe('addToHead', () => {
    test('it should be able to add one item to the list', () => {
      list.addToHead(100);
      expect(list.length).toBe(1);
      expect(list.head!.value).toBe(100);
      expect(list.tail!.value).toBe(100);
    });

    test('it should be able to add multiple items to the list', () => {
      list.addToHead(100);
      list.addToHead(200);
      expect(list.length).toBe(2);
      expect(list.head!.value).toBe(200);
      expect(list.tail!.value).toBe(100);
    });
  });

  describe('addToTail', () => {
    test('it should be able to add one item to the tail', () => {
      list.addToTail(100);
      expect(list.length).toBe(1);
      expect(list.head!.value).toBe(100);
      expect(list.tail!.value).toBe(100);
    });

    test('it should be able to add multiple items to the tail', () => {
      list.addToTail(100);
      list.addToTail(200);
      list.addToTail(300);
      expect(list.length).toBe(3);
      expect(list.head!.value).toBe(100);
      expect(list.tail!.value).toBe(300);
    });
  });
  describe('deleteHead', () => {
    test('it should handle null gracefully', () => {
      list.deleteHead();

      expect(list.length).toBe(0);
    });

    test('it should be able to remove the last item in a list', () => {
      list.addToHead(100);
      list.deleteHead();

      expect(list.length).toBe(0);
      expect(list.head).toBeUndefined();
      expect(list.tail).toBeUndefined();
    });

    test('it should be able to delete one item from the head', () => {
      list.addToTail(100);
      list.addToTail(200);
      list.addToTail(300);
      expect(list.length).toBe(3);

      list.deleteHead();
      expect(list.length).toBe(2);
      expect(list.tail!.value).toBe(300);
      expect(list.head!.value).toBe(200);
    });
  });

  describe('deleteTail', () => {
    test('it should handle null gracefully', () => {
      list.deleteTail();

      expect(list.length).toBe(0);
    });

    test('it should be able to remove the last item in a list', () => {
      list.addToTail(100);
      list.deleteTail();

      expect(list.length).toBe(0);
      expect(list.head).toBeUndefined();
      expect(list.tail).toBeUndefined();
    });

    test('it should be able to delete one item from the tail', () => {
      list.addToTail(100);
      list.addToTail(200);
      list.addToTail(300);
      expect(list.length).toBe(3);

      list.deleteTail();
      expect(list.length).toBe(2);
      expect(list.tail!.value).toBe(200);
      expect(list.head!.value).toBe(100);
    });
  });

  describe('deleteValue', () => {
    test('it should handle null gracefully', () => {
      list.deleteValue();

      expect(list.length).toBe(0);
    });

    test('it should return if item to delete does not exist', () => {
      list.addToTail(100);

      expect(list.length).toBe(1);
      expect(list.deleteValue(200)).toBeUndefined();
    });

    test('it should be able to delete one item from the list', () => {
      list.addToTail(100);
      list.addToTail(200);
      list.addToTail(300);
      expect(list.length).toBe(3);

      list.deleteValue(200);
      expect(list.length).toBe(2);
      expect(list.search()).toBe(false);
      expect(list.tail!.prev!.value).toBe(100);
      expect(list.head!.next!.value).toBe(300);
    });
  });

  describe('Search', () => {
    test('it should handle null gracefully', () => {
      expect(list.length).toBe(0);
      expect(list.search(200)).toBe('List empty');
    });

    test('it should be able to find an element', () => {
      list.addToTail(100);
      list.addToTail(200);
      list.addToTail(300);

      expect(list.search(100).value).toBe(100);
    });

    test('it should return if a node is not found', () => {
      list.addToTail(100);
      list.addToTail(200);
      list.addToTail(300);

      expect(list.search(1000)).toBeFalsy();
    });
  });

  describe('Reverse', () => {
    test('it should handle null gracefully', () => {
      expect(list.length).toBe(0);
      expect(list.reverse()).toBe('List empty');
    });

    test('it should return if there are no or only 1 item in the list', () => {
      list.addToTail(100);
      const reversed = list.reverse();
      expect(reversed.head.value).toBe(100);
      expect(reversed.tail.value).toBe(100);
    });

    test('it should be able to be able to reverse the order of a list', () => {
      list.addToTail(100);
      list.addToTail(200);
      list.addToTail(300);

      const reversed = list.reverse();

      expect(reversed.head.value).toBe(300);
      expect(reversed.tail.value).toBe(100);
    });
  });
});
