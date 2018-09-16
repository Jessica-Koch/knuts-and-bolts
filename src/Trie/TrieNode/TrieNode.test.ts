import TrieNode from './TrieNode';

describe('Node', () => {
  describe('initialization', () => {
    test('it should be ok', () => {
      const node = new TrieNode('j');
      expect(node).toBeTruthy();
    });
  });

  describe('setEnd', () => {
    test('it should set end to true', () => {
      const node = new TrieNode('i');
      expect(node.isEndOfWord).toBe(false);
      node.setEnd();
      expect(node.isEndOfWord).toBe(true);
    });
  });

  describe('isEnd', () => {
    test('it shoudl return whether it is the end of the word', () => {
      const node = new TrieNode('i');
      expect(node.isEnd()).toBe(false);
      node.setEnd();
      expect(node.isEnd()).toBe(true);
    });
  });
});
