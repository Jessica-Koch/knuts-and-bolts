export const numOccur = (char: string, str: string): number => {
  if (str === '') return 0;

    const ch = str.slice(0, 1);
    if (char === ch) {
      return 1 + numOccur(char, str.slice(1));
    } else {
      return numOccur(char, str.slice(1));
    }
};

export const removeVowels = (str: string): string => {
  if (str === '') return str;

  const ch = str.slice(0, 1);
  const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
  vowels.has(ch) ? (str = removeVowels(str.substr(1))) : (str = ch + removeVowels(str.slice(1)));

  return str;
};