import TreeNode from './TreeNode';

describe('Node', () => {
  test('Instantiates with value', () => {
    const node = new TreeNode('bloop');

    expect(node.value).toBe('bloop');
    expect(node.left).toBeUndefined();
    expect(node.right).toBeUndefined();
  });
});
