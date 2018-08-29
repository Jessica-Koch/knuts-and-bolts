import { swap } from './util';

describe('util', () => {
  describe('swap', () => {
    it('should swap values', () => {
      const arr = [1, 2];
      const swapped = swap(arr, 0, 1);
      expect(swapped[0]).toBe(2);
      expect(swapped[1]).toBe(1);
    });
  });
});
