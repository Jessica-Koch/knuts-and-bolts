import { numOccur, removeVowels } from './String';

describe('String', () => {
  describe('numOccur', () => {
    it('returns 0 for an empty string', () => {
      expect(numOccur('p', '')).toBe(0);
      expect(numOccur('', '')).toBe(0);
    });
    it('counts the number of occurrances in a string', () => {
      expect(numOccur('p', 'puppy')).toBe(3);
    });
  });

  describe('removeVowels', () => {
    it('returns 0 for an empty string', () => {
      expect(removeVowels('')).toBe('');
    });
    it('counts the number of occurrances in a string', () => {
      expect(removeVowels('abcdefgh')).toBe('bcdfgh');
    });
  });
});
