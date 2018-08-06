import Node from "./Node";
class BinarySearchTree<T extends string | number> {
  public val?: string | number;
  public root: Node<T>;

  public constructor(val: T) {
    this.root = new Node(val);
  }

  public recursiveInsert(root: Node<T>, val: T) {
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

  public insert(val: T) {
    let root = this.root;
    while (root) {
      if (val < root.value) {
        if (!root.left) {
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
    return;
  }

  public recursiveSearch(val: T, root?: Node<T>): T | undefined {
    if (!root) {
      return;
    }

    if (val === root.value) {
      return val;
    }
    if (val < root.value) {
      return root.left !== undefined
        ? this.recursiveSearch(val, root.left)
        : undefined;
    }

    return root.right !== undefined
      ? this.recursiveSearch(val, root.right)
      : undefined;
  }

  public preorderTraversal(node?: Node<T>) {
    if (!node || !this.root) {
      return;
    }

    this.preorderTraversal(node.left);
    this.preorderTraversal(node.right);
  }

  public search(val: T) {
    if (val === undefined || this.root === undefined) {
      return;
    }
    let root;

    root = this.root;

    while (root) {
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
}

export default BinarySearchTree;
