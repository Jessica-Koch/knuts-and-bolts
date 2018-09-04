import BinarySearchTree from './BinarySearchTree';

describe('BinarySearchTrees', () => {
  describe('initialization', () => {
    test('it initializes a root', () => {
      const tree = new BinarySearchTree(1);
      expect(tree.root.value).toBe(1);
    });
  });

  describe('recursiveInsert', () => {
    test('the first item inserted should be the root of the tree', () => {
      const tree = new BinarySearchTree(1);

      expect(tree.root!.value).toBe(1);
    });

    test('it should be able to insert values smaller than the root', () => {
      const tree = new BinarySearchTree<number>(11);
      tree.recursiveInsert(tree.root, 6);
      tree.recursiveInsert(tree.root, 2);
      expect(tree.root.value).toBe(11);
      expect(tree.root.left!.value).toBe(6);
      expect(tree.root.left!.left!.value).toBe(2);
    });

    test('it should be able to insert values larger than the root', () => {
      const tree = new BinarySearchTree<number>(11);
      tree.recursiveInsert(tree.root, 6);
      tree.recursiveInsert(tree.root, 19);
      tree.recursiveInsert(tree.root, 90);
      expect(tree.root.value).toBe(11);
      expect(tree.root.right!.value).toBe(19);
      expect(tree.root.right!.right!.value).toBe(90);
    });

    test('it should be able to insert values equal than the root', () => {
      const tree = new BinarySearchTree<number>(11);
      tree.recursiveInsert(tree.root, 11);
      expect(tree.root!.value).toBe(11);
      expect(tree.root!.right!.value).toBe(11);
    });
  });

  describe('insert', () => {
    test('the first item inserted should be the root of the tree', () => {
      const tree = new BinarySearchTree<number>(11);
      expect(tree.root!.value).toBe(11);
    });

    test('it should be able to insert values smaller than the root', () => {
      const tree = new BinarySearchTree<number>(11);
      tree.insert(6);
      tree.insert(9);
      expect(tree.root.value).toBe(11);
      expect(tree.root.left!.value).toBe(6);
    });

    test('it should be able to insert values larger than the root', () => {
      const tree = new BinarySearchTree<number>(11);
      tree.insert(6);
      tree.insert(19);
      tree.insert(34);
      expect(tree.root!.value).toBe(11);
      expect(tree.root.right!.value).toBe(19);
    });
  });

  describe('recursiveSearch', () => {
    const tree = new BinarySearchTree<number>(11);
    tree.insert(6);
    tree.insert(19);
    tree.insert(21);
    tree.insert(4);
    tree.insert(10);

    test('it should return undefined if there is no root', () => {
      const result = tree.recursiveSearch(4, undefined);
      expect(result).toBeUndefined();
    });

    test('it should be able to find a node if present and less than root', () => {
      const result = tree.recursiveSearch(4, tree.root);
      expect(result).toBe(4);
    });

    test('it should be able to find a node if present and greater than root', () => {
      const result = tree.recursiveSearch(21, tree.root);
      expect(result).toBe(21);
    });

    test('it should be able to find a node is equal to root', () => {
      const result = tree.recursiveSearch(11, tree.root);
      expect(result).toBe(11);
    });

    test('it should return undefined if node is not found', () => {
      const result = tree.recursiveSearch(13, tree.root);
      expect(result).toBeUndefined();
    });
  });

  describe('search', () => {
    const tree = new BinarySearchTree<number>(11);
    tree.insert(6);
    tree.insert(19);
    tree.insert(21);
    tree.insert(4);
    tree.insert(10);

    test('returns undefined if no value is passed', () => {
      const result = tree.search(undefined!);
      expect(result).toBeUndefined();
    });

    test('it should be able to find a node if present and less than root', () => {
      const result = tree.search(4);
      expect(result).toBe(4);
    });

    test('it should be able to find a node if present and greater than root', () => {
      const result = tree.search(21);
      expect(result).toBe(21);
    });

    test('it should be able to find a node is equal to root', () => {
      const result = tree.search(11);
      expect(result).toBe(11);
    });

    test('it should return null if node is not found', () => {
      const result = tree.search(13);
      expect(result).toBeUndefined();
    });
  });

  describe('preorder traversal', () => {
    const tree = new BinarySearchTree<number>(1);
    test('it should handle null nodes', () => {
      expect(tree.preorderTraversal()).toBeUndefined();
    });
  });
});
