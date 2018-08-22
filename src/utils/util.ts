/**
 *
 * @param arr array to swap
 * @param i first index
 * @param j second index
 * @returns array
 */
export const swap = (arr: any[], i: number, j: number) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr;
};
