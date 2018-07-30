/**
 *
 * @param arr
 * @returns array
 */
export const selectionSort = (arr: Array<number>) => {
  const length = arr.length;
  if (length === 0) arr;

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

export const bubbleSort = (arr: Array<number>) => {
  const length = arr.length;
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;
    for (let i = 1; i < length; i++) {
      if (arr[i - 1] > arr[i]) {
        isSorted = false;
        let temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
      }
    }
  }
  return arr;
};
