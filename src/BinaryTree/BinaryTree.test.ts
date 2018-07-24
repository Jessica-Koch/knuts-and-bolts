import BinaryTree from './BinaryTree';
import Node from '../BinarySearchTree/Node';

describe('Binary Tree', () => {
  describe('isMirrored', () => {
    test('it should return true if the tree is mirrored', () => {
      const tree = new BinaryTree(13);
      const { n1, n2 } = { n1: new Node(6), n2: new Node(6) };
      const { n11, n22 } = { n11: new Node(8), n22: new Node(8) };
      const { n12, n21 } = { n12: new Node(4), n21: new Node(4) };
      const { n111, n222 } = { n111: new Node(9), n222: new Node(9) };
      const { n112, n221 } = { n112: new Node(50), n221: new Node(50) };
      const { n121, n212 } = { n121: new Node(2), n212: new Node(2) };
      const { n122, n211 } = { n122: new Node(19), n211: new Node(19) };

      n11.left = n111;
      n11.right = n112;
      n12.left = n121;
      n12.right = n122;

      n21.left = n211;
      n21.right = n212;
      n22.left = n221;
      n22.right = n222;

      n1.left = n11;
      n1.right = n12;

      n2.left = n21;
      n2.right = n22;

      tree.root.left = n1;
      tree.root.right = n2;

      expect(tree.isMirrored(tree.root)).toBe(true);
    });

    test('it should return false if the tree is not mirrored', () => {
      const tree = new BinaryTree(13);
      const n1 = new Node(7);
      const n2 = new Node(6);
      const n11 = new Node(11);
      const n22 = new Node(22);
      n2.left = n11;
      n2.right = n22;
      tree.root.left = n1;
      tree.root.right = n2;
      expect(tree.isMirrored(tree.root)).toBe(false);
    });

    test('it should return false if the tree is not mirrored because a left node is not present', () => {
      const tree = new BinaryTree(13);
      const n1 = new Node(7);
      const n2 = new Node(6);
      const n11 = new Node(11);
      n2.right = n11;

      tree.root.left = n1;
      tree.root.right = n2;
      expect(tree.isMirrored(tree.root)).toBe(false);
    });

    test('it should return false if the tree is not mirrored because a right node is not present', () => {
      const tree = new BinaryTree(13);
      const n1 = new Node(7);
      const n2 = new Node(6);
      const n11 = new Node(11);
      n2.left = n11;

      tree.root.left = n1;
      tree.root.right = n2;
      expect(tree.isMirrored(tree.root)).toBe(false);
    });
  });

  //   describe("printBreadth", () => {
  //     test("it should return if no root", () => {
  //       const tree = new BinaryTree();
  //       expect(tree.printBreadth()).toBeUndefined();
  //     });

  //     test("it shoudl print the tree", () => {
  //       const tree = new BinaryTree(13);
  //       const { n1, n2 } = { n1: new Node(6), n2: new Node(6) };
  // const { n11, n22 } = { n11: new Node(8), n22: new Node(8) };
  // const { n12, n21 } = { n12: new Node(4), n21: new Node(4) };
  // const { n111, n222 } = { n111: new Node(9), n222: new Node(9) };
  // const { n112, n221 } = { n112: new Node(50), n221: new Node(50) };
  // const { n121, n212 } = { n121: new Node(2), n212: new Node(2) };
  // const { n122, n211 } = { n122: new Node(19), n211: new Node(19) };

  // n11.left = n111;
  // n11.right = n112;
  // n12.left = n121;
  // n12.right = n122;

  // n21.left = n211;
  // n21.right = n212;
  // n22.left = n221;
  // n22.right = n222;

  // n1.left = n11;
  // n1.right = n12;

  // n2.left = n21;
  // n2.right = n22;

  // tree.root.left = n1;
  // tree.root.right = n2;

  //       expect(tree.printBreadth()).toBe();
  //     });

  //     test("it should return false if the tree is not mirrored", () => {
  //       const tree = new BinaryTree(13);
  //       const n1 = new Node(7);
  //       const n2 = new Node(6);
  //       const n11 = new Node(11);
  //       const n22 = new Node(22);
  //       n2.left = n11;
  //       n2.right = n22;
  //       tree.root.left = n1;
  //       tree.root.right = n2;
  //       expect(tree.isMirrored(tree.root)).toBe(false);
  //     });

  //     test("it should return false if the tree is not mirrored because a left node is not present", () => {
  //       const tree = new BinaryTree(13);
  //       const n1 = new Node(7);
  //       const n2 = new Node(6);
  //       const n11 = new Node(11);
  //       n2.right = n11;

  //       tree.root.left = n1;
  //       tree.root.right = n2;
  //       expect(tree.isMirrored(tree.root)).toBe(false);
  //     });

  //     test("it should return false if the tree is not mirrored because a right node is not present", () => {
  //       const tree = new BinaryTree(13);
  //       const n1 = new Node(7);
  //       const n2 = new Node(6);
  //       const n11 = new Node(11);
  //       n2.left = n11;

  //       tree.root.left = n1;
  //       tree.root.right = n2;
  //       expect(tree.isMirrored(tree.root)).toBe(false);
  //     });
  //   });
});
