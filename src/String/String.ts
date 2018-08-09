export const numOccur = (char: string, str: string): number => {
  if (str === "") return 0;

  if (str.length) {
    const ch = str.slice(0, 1);
    if (char === ch) {
      return 1 + numOccur(char, str.slice(1));
    } else {
      return numOccur(char, str.slice(1));
    }
  }
  return 1;
};
