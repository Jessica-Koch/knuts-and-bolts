import Node from './Node';
import Queue from '../Queue/Queue;

class BinarySearchTree {
  val?: string | number;
  root?: Node;
  constructor(val?: string | number) {
    if (val) {
      this.root = new Node(val);
    }
    this.root = undefined;
  }

  recursiveInsert(root: Node, val: string | number) {
    if (val < root.value) {
      !root.left
        ? (root.left = new Node(val))
        : this.recursiveInsert(root.left, val);
    }
    if (val >= root.value) {
      !root.right
        ? (root.right = new Node(val))
        : this.recursiveInsert(root.right, val);
    }
  }

  // insert(val: string | number) {
  //   if (this.root === undefined) return;

  //   if (!this.root) {
  //     this.root = new Node(val);
  //     return;
  //   }

  //   let root = this.root;
  //   while (root) {
  //     if (val < root.value) {
  //       if (root.left === undefined) {
  //         root.left = new Node(val);
  //         return root.left;
  //       } else {
  //         root = root.left;
  //       }
  //     }

  //     if (val >= root.value) {
  //       if (!root.right) {
  //         root.right = new Node(val);
  //         break;
  //       } else {
  //         root = root.right;
  //       }
  //     }
  //   }
  // }

  // recursiveSearch(val: string | number, root?: Node) {
  //   if (!root) return;
  //   else if (val === root.value) {
  //     return val;
  //   } else if (val < root.value) {
  //     return this.recursiveSearch(val, root.left);
  //   } else if (val > root.value) {
  //     root.right !== undefined
  //       ? this.recursiveSearch(val, root.right)
  //       : undefined;
  //   }
  // }

  preorderTraversal(node?: Node) {
    if (!node || !this.root) return;

    console.log(node.value);

    this.preorderTraversal(node.left);
    this.preorderTraversal(node.right);
  }

  inorderTraversal(node?: Node) {}

  postorderTraversal(node?: Node){}

  printBreadth() {
    const q = new Queue;

  }
  // search(val?: string | number) {
  //   if (val === undefined || this.root === undefined) return;
  //   let root = this.root;

  //   while (root !== undefined) {
  //     if (val === root.value) {
  //       return val;
  //     } else if (val < root.value) {
  //       root = root.left;
  //     } else if (val > root.value) {
  //       root = root.right;
  //     }
  //   }
  //   return undefined;
  // }

  // delete(val: string | number) {
  //   // if (this.root === undefined) {
  //   //   return;
  //   // };
  // }
}

export default BinarySearchTree;
