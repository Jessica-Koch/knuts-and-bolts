<<<<<<< HEAD
import BST from "./BinarySearchTree";
=======
import BinarySearchTree from "./BinarySearchTree";
>>>>>>> 4631a75acf10dab3c2543681d44dd9a02f5f3005

describe("BinarySearchTrees", () => {
  describe("initialization", () => {
    test("it initializes without a root", () => {
      const tree = new BinarySearchTree();
      expect(tree.root).toBeUndefined();
    });
  });

  describe("insert", () => {
    test("it should handle null gracefull", () => {
      const tree = new BinarySearchTree();
      tree.insert();
      expect(tree.root).toBeUndefined();
    });

    test("the first item inserted should be the root of the tree", () => {
      const tree = new BinarySearchTree();
      tree.insert(11);
      expect(tree.root.value).toBe(11);
    });

    test("it should be able to insert values smaller than the root", () => {
      const tree = new BinarySearchTree();
      tree.insert(11);
      tree.insert(6);
      tree.insert(9);
      expect(tree.root.value).toBe(11);
      expect(tree.root.left.value).toBe(6);
    });

    test("it should be able to insert values larger than the root", () => {
      const tree = new BinarySearchTree();
      tree.insert(11);
      tree.insert(6);
      tree.insert(19);
      tree.insert(34);
      expect(tree.root.value).toBe(11);
      expect(tree.root.right.value).toBe(19);
    });
  });

  describe("recursiveInsert", () => {
    test("the first item inserted should be the root of the tree", () => {
      const tree = new BinarySearchTree(1);

      expect(tree.root.value).toBe(1);
    });

    test("it should be able to insert values smaller than the root", () => {
      const tree = new BinarySearchTree(11);
      tree.recursiveInsert(tree.root, 6);
      tree.recursiveInsert(tree.root, 2);
      expect(tree.root.value).toBe(11);
      expect(tree.root.left.value).toBe(6);
      expect(tree.root.left.left.value).toBe(2);
    });

    test("it should be able to insert values larger than the root", () => {
      const tree = new BinarySearchTree(11);
      tree.recursiveInsert(tree.root, 6);
      tree.recursiveInsert(tree.root, 19);
      tree.recursiveInsert(tree.root, 90);
      expect(tree.root.value).toBe(11);
      expect(tree.root.right.value).toBe(19);
      expect(tree.root.right.right.value).toBe(90);
    });

    test("it should be able to insert values equal than the root", () => {
      const tree = new BinarySearchTree(11);
      tree.recursiveInsert(tree.root, 11);
      expect(tree.root.value).toBe(11);
      expect(tree.root.right.value).toBe(11);
    });
  });

  describe("recursiveSearch", () => {
    const tree = new BinarySearchTree(11);
    tree.insert(6);
    tree.insert(19);
    tree.insert(21);
    tree.insert(4);
    tree.insert(10);

    test("it should handle an empty search", () => {
      const result = tree.recursiveSearch(tree.root);
      expect(result).toBeUndefined();
    });

    test("it should be able to find a node if present and less than root", () => {
      const result = tree.recursiveSearch(tree.root, 4);

      // tree.inOrder(tree.root);
      expect(result).toBe(4);
    });

    test("it should be able to find a node if present and greater than root", () => {
      const result = tree.recursiveSearch(tree.root, 21);
      expect(result).toBe(21);
    });

    test("it should be able to find a node is equal to root", () => {
      const result = tree.recursiveSearch(tree.root, 11);
      expect(result).toBe(11);
    });

    test("it should return undefined if node is not found", () => {
      const result = tree.recursiveSearch(tree.root, 13);
      expect(result).toBeUndefined();
    });
  });

  describe("search", () => {
    const tree = new BinarySearchTree();
    tree.insert(11);
    tree.insert(6);
    tree.insert(19);
    tree.insert(21);
    tree.insert(4);
    tree.insert(10);

    test("it handles empty root nodes", () => {
      const emptyTree = new BinarySearchTree();
      const result = emptyTree.search(undefined);
      expect(result).toBeUndefined();
      expect(emptyTree.root).toBeUndefined();
    });

    test("it should handle an empty search", () => {
      const result = tree.search();
      expect(result).toBeUndefined();
    });

    test("it should be able to find a node if present and less than root", () => {
      const result = tree.search(4);
      expect(result).toBe(4);
    });

    test("it should be able to find a node if present and greater than root", () => {
      const result = tree.search(21);
      expect(result).toBe(21);
    });

    test("it should be able to find a node is equal to root", () => {
      const result = tree.search(11);
      expect(result).toBe(11);
    });

    test("it should return null if node is not found", () => {
      const result = tree.search(13);
      expect(result).toBeUndefined();
    });
  });

  describe("delete", () => {
    test("it should handle null gracefully", () => {
      const tree = new BinarySearchTree();
      expect(tree.delete(1)).toBeUndefined();
    });

    test("it should be able to delete a node from the tree", () => {});
  });
});
