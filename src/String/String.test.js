import {stripLetters} from "./String";

describe("String Functions", () => {
  describe("stripLetters", () => {
    const vowelArr = ["a", "e", "i", "o", "u"];

    test("handles null", () => {
      expect(stripLetters("", vowelArr)).toBeUndefined();
    });

    test("it handles non string values bing passed", () => {
      expect(stripLetters(1, vowelArr)).toBeUndefined();
    });

    test("it strips out letters from a string", () => {
      const str = "abcdefghi";
      expect(stripLetters(str, vowelArr)).toBe("bcdfgh");
    });
  });
});
