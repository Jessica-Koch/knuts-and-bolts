import BinaryTree from "./BinaryTree";

describe("BinaryTree", () => {
  let tree;
  beforeEach(() => {
    tree = new BinaryTree(13);
  });

  afterEach(() => {
    tree = new BinaryTree(13);
  });

  describe("isMirrored", () => {
    it("should return tree if a tree can be mirrored", () => {
      tree.isMirrored(tree.root);
    });
  });
});
