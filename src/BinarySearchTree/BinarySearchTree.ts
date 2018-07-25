import Node from "./Node";
import Queue from "../Queue/Queue";

class BinarySearchTree<T extends string | number> {
  val?: string | number;
  root: Node<T>;
  constructor(val: T) {
    this.root = new Node(val);
  }

  recursiveInsert(root: Node<T>, val: T) {
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

  insert(val: T) {
    let root = this.root;
    while (root) {
      if (val < root.value) {
        if (root.left === undefined) {
          root.left = new Node(val);
          break;
        } else {
          root = root.left;
        }
      }

      if (val >= root.value) {
        if (!root.right) {
          root.right = new Node(val);
          break;
        } else {
          root = root.right;
        }
      }
    }
  }

  recursiveSearch(val: T, root?: Node<T>): T | undefined {
    if (!root) return;
    else if (val === root.value) {
      return val;
    } else if (val < root.value) {
      return this.recursiveSearch(val, root.left);
    } else if (val > root.value) {
      root.right !== undefined
        ? this.recursiveSearch(val, root.right)
        : undefined;
    }
    return undefined;
  }

  preorderTraversal(node?: Node<T>) {
    if (!node || !this.root) return;

    console.log(node.value);

    this.preorderTraversal(node.left);
    this.preorderTraversal(node.right);
  }

  inorderTraversal(node?: Node<T>) {}

  postorderTraversal(node?: Node<T>) {}

  printBreadth(rootNode?: Node<T>) {
    if (!rootNode) return;

    const q = new Queue();
    q.enqueue(rootNode.value);
    console.log(rootNode);

    while (q.size() > 0) {
      const currentNode = q.top();
      if (currentNode!.left !== undefined) {
        q.enqueue(rootNode.left!.value);
      }
      q.enqueue(rootNode.right!.value);
    }

    console.log(q.top());
    console.log();
  }

  search(val: T) {
    if (val === undefined || this.root === undefined) return;
    let root = this.root;

    while (root !== undefined) {
      if (val === root.value) {
        return val;
      } else if (val < root.value) {
        root = root.left;
      } else if (val > root.value) {
        root = root.right;
      }
    }
    return undefined;
  }

  // delete(val: T) {
  // if (this.root === undefined) {
  //   return;
  // };
  // }
}

export default BinarySearchTree;
