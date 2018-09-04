import Node from './Node';

describe('Node', () => {
  describe('initialization', () => {
    test('it should be ok', () => {
      const node = new Node('p');
      expect(node).toBeTruthy();
    });
  });
});
