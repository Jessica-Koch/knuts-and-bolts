const BST = require('./BinarySearchTree');

describe('BinarySearchTrees', () => {
  describe('initialization', () => {
    test('it initializes without a root', () => {
      const tree = new BST()
      expect(tree.root).toBeUndefined();
    })
  })

  describe('insert', () => {
    test('it should handle null gracefull', () => {
      const tree = new BST();
      tree.insert();
      expect(tree.root).toBeUndefined();
    })

    test('the first item inserted should be the root of the tree', () => {
      const tree = new BST()
      tree.insert(11);
      expect(tree.root.value).toBe(11);
    })

    test('it should be able to insert values smaller than the root', () => {
      const tree = new BST();
      tree.insert(11);
      tree.insert(6);
      tree.insert(9);
      expect(tree.root.value).toBe(11);
      expect(tree.root.left.value).toBe(6);
    });
    
    test('it should be able to insert values larger than the root', () => {
      const tree = new BST();
      tree.insert(11);
      tree.insert(6);
      tree.insert(19);
      tree.insert(34);
      expect(tree.root.value).toBe(11);
      expect(tree.root.right.value).toBe(19);
    });
  })
  
  describe("recursiveInsert", () => {
    test("the first item inserted should be the root of the tree", () => {
      const tree = new BST(1);
      
      expect(tree.root.value).toBe(1);
    });
    
    test('it should be able to insert values smaller than the root', () => {
      const tree = new BST(11);
      tree.recursiveInsert(tree.root, 6);
      expect(tree.root.value).toBe(11);
      expect(tree.root.left.value).toBe(6);
    });
    
    test('it should be able to insert values larger than the root', () => {
      const tree = new BST(11);
      tree.recursiveInsert(tree.root, 6);
      tree.recursiveInsert(tree.root, 19);
      expect(tree.root.value).toBe(11);
      expect(tree.root.right.value).toBe(19);
    });
    
    test('it should be able to insert values larger than the root', () => {
      const tree = new BST(11);
      tree.recursiveInsert(tree.root, 6);
      tree.recursiveInsert(tree.root, 11);
      expect(tree.root.value).toBe(11);
      expect(tree.root.right.value).toBe(11);
    });
  });
  
  describe('search', () => {
    const tree = new BST();
    tree.insert(11);
    tree.insert(6);
    tree.insert(19);
    tree.insert(21);
    tree.insert(19);
    tree.insert(19);
    test('it should be able to find a node if present', () => {
      
    })
    
    test('it should return undefined if node is not found', () => {

    })
  })
  
  describe('delete', () => {
    test('it should handle null gracefully', () => {
      const tree = new BST();
      expect(tree.delete(1)).toBeUndefined();
    })

    test('it should be able to delete a node from the tree', () => {

    })
  })
})