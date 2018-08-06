import { swap } from '../utils/util';
/**
 *
 * @param arr
 * @returns array
 */
export const selectionSort = (arr: Array<number>) => {
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    let smallestIndex = i;

    for (let nextNumIndex = i + 1; nextNumIndex < length; nextNumIndex++) {
      if (arr[nextNumIndex] < arr[smallestIndex]) {
        smallestIndex = nextNumIndex;
      }
    }
    if (smallestIndex !== i) {
      swap(arr, i, smallestIndex);
    }
  }

  return arr;
};

/**
 *
 * @param arr
 * @returns array
 */
export const bubbleSort = (arr: Array<number>) => {
  const length = arr.length;
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;
    for (let i = 1; i < length; i++) {
      if (arr[i - 1] > arr[i]) {
        isSorted = false;
        swap(arr, i, i - 1);
      }
    }
  }
  return arr;
};

/**
 *
 * @param arr
 * @returns array
 */
export const insertionSort = (arr: Array<number>) => {
  let j;
  const length = arr.length;
  if (length <= 1) return arr;

  for (let i = 0; i < length; i++) {
    const currentUnsortedItem = arr[i];

    for (j = i; j > 0 && arr[j - 1] > currentUnsortedItem; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = currentUnsortedItem;
  }
  return arr;
};

const merge = (
  leftArray: Array<number>,
  rightArray: Array<number>,
  arr: Array<number>
) => {
  let index = 0;

  while (leftArray.length && rightArray.length) {
    if (rightArray[0] < leftArray[0]) {
      arr[index++] = rightArray.shift() || 0;
    } else {
      arr[index++] = leftArray.shift() || 0;
    }
  }

  while (leftArray.length) {
    arr[index++] = leftArray.shift() || 0;
  }

  while (rightArray.length) {
    arr[index++] = rightArray.shift() || 0;
  }
};

export const mergeSort = (arr: Array<number>) => {
  const length = arr.length;
  if (length <= 1) return arr;

  const midpoint = Math.floor(length / 2);

  const leftArray = arr.slice(0, midpoint);
  const rightArray = arr.slice(midpoint);

  mergeSort(leftArray);
  mergeSort(rightArray);

  merge(leftArray, rightArray, arr);
  return arr;
};

export const partition = (
  items: Array<number>,
  left: number,
  right: number,
) => {
  let pivot = items[Math.floor((right + left) / 2)];
  let l = left;
  let r = right;
  while (l <= r) {
    while (items[l] < pivot) {
              l++;
              console.log("l: ", l);
            }

    // If the right pointer is greater than the pivot, decrement it.
    // In other words, move the pointer to the left.
    while (items[r] > pivot) {
      r--;
    }

    if (l <= r) {
      swap(items, l, r);

      // After swapping, increment/decrement the pointers respectively.
      l++;
      r--;
    }
  }

  console.log("returned l: ", l);
  return l;
};

export const quickSort = (
  arr: Array<number>,
  leftIndex: number,
  rightIndex: number
) => {
  let pivotIndex;

  if (arr.length > 1) {
    pivotIndex = partition(arr, leftIndex, rightIndex);

    if (leftIndex < pivotIndex - 1) {
      quickSort(arr, leftIndex, pivotIndex - 1);
    }

    if (pivotIndex < rightIndex) {
      quickSort(arr, pivotIndex, rightIndex);
    }
  }
  return arr;
};
