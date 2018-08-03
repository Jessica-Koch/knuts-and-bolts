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
      let current = arr[i];
      arr[i] = arr[smallestIndex];
      arr[smallestIndex] = current;
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
        swap(arr[i], arr[i - 1]);
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
    for (j = i; j > 0 && currentUnsortedItem < arr[j - 1]; j--) {
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
