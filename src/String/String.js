const removeLetters = (arr, lettersArr) => {
  for (let i = 0; i < arr.length; i++) {
    const letter = arr[i];
    if (lettersArr.indexOf(letter) !== -1) {
      const idx = arr.indexOf(letter);
      arr.splice(arr.indexOf(letter), 1);
      removeLetters(arr, lettersArr);
    }
  }
  return arr.join("");
};

export const stripLetters = (str, letters) => {
  if (typeof str !== "string" || str.length === 0) return;

  const arr = str.split("");

  const result = removeLetters(arr, letters);

  return result;
};
