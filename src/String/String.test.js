import {isPalindrome, stripLetters} from "./String";

describe("String Functions", () => {
  describe("isPalindrome", () => {
    test("it should return true if the string is empty", () => {
      expect(isPalindrome("")).toBe(true);
    });

    test("it should return true if the string has one letter", () => {
      expect(isPalindrome("a")).toBe(true);
    });

    test("it should return false if not a palendrome", () => {
      expect(isPalindrome("be")).toBe(false);
    });

    test("it should return false if not a palendrome", () => {
      expect(isPalindrome("aa")).toBe(true);
    });

    test("it should return false if not a palendrome", () => {
      expect(isPalindrome("racecar")).toBe(true);
    });
  });

  describe('stripLetters', () => {
    test('it should return if nothing is passed', () => {
      expect(stripLetters()).toBeUndefined();
    })

    test('it should return original string if it does not include any letters from letter arr', () => {
      expect(stripLetters('cat', ['b'])).toBe('cat');
    })

    test('it should return original string if letter arr is empty', () => {
      expect(stripLetters('cat', [])).toBe('cat');
    })

    test('it should remove letter array characters from the string', () => {
      expect(stripLetters('abcdefghij', ['a', 'e', 'i', 'o', 'u'])).toBe('bcdfghj')
    })
  })
});
