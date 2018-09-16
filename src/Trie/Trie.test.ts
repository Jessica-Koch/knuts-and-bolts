import Trie from './Trie';
import TrieNode from './TrieNode/TrieNode';

describe('Trie', () => {
  let trie: Trie;
  beforeEach(() => {
    trie = new Trie();
  });

  afterEach(() => {
    trie = new Trie();
  });

  describe('initialization', () => {
    test('it behaves', () => {
      expect(trie).toBeTruthy();
    });
  });

  describe('add', () => {
    test('it can add words to the Trie', () => {
      trie.addWord('puppy');
      const a: string[] = [];
      const myMapFn = (mp: Map<string, TrieNode>) => {
        for (const [k, v] of mp) {
          a.push(k);
          myMapFn(v.children);
        }
        return a;
      };

      myMapFn(trie.children);
      expect(a.join('')).toBe('puppy');
    });
  });

  // describe('isWord', () => {
  //   test('it can add words to the Trie', () => {
  //     const t = new Trie();
  //     t.addWord('bird');
  //     console.log('-------------bird trie', t);
  //     expect(t.isWord('bird')).toBe(true);
  //     expect(t.isWord('kitty')).toBe(false);
  //   });
  // });
});
