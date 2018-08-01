import { swap } from './util';

describe('util', () => {
  describe('swap', () => {
    it('should swap values', () => {
      expect(swap(1, 2)).toEqual({a: 2, b: 1})
    })
  })
})