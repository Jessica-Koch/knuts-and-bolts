const removeLetters = (str, lettersArr, resultArr) => {
  if (str.length === 0) return;
  let len = str.length;
  let letter = str.substring(0, 1);

  if (lettersArr.indexOf(letter) === -1) {
    resultArr.push(letter);
  }

  return removeLetters(str.substring(1, str.length), lettersArr, resultArr);
};

export const stripLetters = (str, letters) => {
  let result = [];

  if (typeof str !== "string" || str.length === 0) return;

  removeLetters(str, letters, result);
  return result.join("");
};
