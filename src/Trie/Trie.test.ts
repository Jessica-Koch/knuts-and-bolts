import Trie from './Trie';

describe('Trie', () => {
  describe('initialization', () => {
    test('it behaves', () => {
      const trie = new Trie({ bloop: 1 });
      expect(trie).toBeTruthy();
    });
  });
});
