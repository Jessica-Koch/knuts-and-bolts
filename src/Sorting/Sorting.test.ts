import {
  bubbleSort,
  countingSort,
  insertionSort,
  mergeSort,
  partition,
  quickSort,
  selectionSort,
} from './Sorting';

describe('Sorting', () => {
  describe('selectionSort', () => {
    test('it should handle an empty array', () => {
      expect(selectionSort([])).toEqual([]);
    });

    test('it should sort an array of numbers', () => {
      expect(selectionSort([2, 4, 1, 3, 5])).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('bubbleSort', () => {
    test('it should handle an empty array', () => {
      expect(bubbleSort([])).toEqual([]);
    });

    test('it should be able to sort an array of numbers', () => {
      expect(bubbleSort([2, 4, 1, 3, 5])).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('insertionSort', () => {
    test('it should handle an empty array', () => {
      expect(insertionSort([])).toEqual([]);
    });

    test('it should be able to sort an array of numbers', () => {
      expect(insertionSort([2, 4, 1, 3, 5])).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('mergeSort', () => {
    test('it should handle an empty array', () => {
      expect(mergeSort([])).toEqual([]);
    });

    test('it should be able to sort an array of numbers', () => {
      expect(mergeSort([2, 4, 1, 3, 5])).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('quickSort', () => {
    test('it should handle an empty array', () => {
      expect(quickSort([], 0, 0)).toEqual([]);
    });

    test('it should be able to sort an array of numbers', () => {
      const arr = [2, 4, 1, 3, 5];
      expect(quickSort(arr, 0, arr.length - 1)).toEqual([1, 2, 3, 4, 5]);
    });

    describe('partition', () => {
      it('should return the middle element', () => {
        const arr = [2, 4, 1, 3, 5];
        expect(partition(arr, 0, arr.length - 1)).toBe(1);
      });
      it('should return the middle-left element when array is even', () => {
        const arr = [19, 22, 63, 105, 2, 46];
        expect(partition(arr, 0, arr.length - 1)).toBe(4);
      });
    });
  });

  describe('countingSort', () => {
    test('it should be able to sort an array of numbers', () => {
      const arr = [9, 4, 1, 7, 9, 1, 2, 0];
      expect(countingSort(arr, 0, 9)).toEqual([0, 1, 1, 2, 4, 7, 9, 9]);
    });
  });
});
