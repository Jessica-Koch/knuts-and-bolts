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

export const removeVowels = (str: string): string => {
  if (str === "") return str;

  if (str.length) {
    const ch = str.slice(0, 1);

    if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
      str = removeVowels(str.substr(1));
    } else {
      str = ch + removeVowels(str.slice(1));
    }
  }
  return str;
};