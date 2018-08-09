import Node from "./Node";
class BinarySearchTree<T extends string | number> {
  public val?: string | number;
  public root: Node<T>;

  public constructor(val: T) {
    this.root = new Node(val);
  }

  public recursiveInsert(root: Node<T>, val: T) {
    const side = this.leftOrRight(root, val);
    const rs = root[side];
    rs ? this.recursiveInsert(rs, val) : (root[side] = new Node(val));
  }

  public insert(val: T) {
    let root = this.root;
    while (root) {
      const side = this.leftOrRight(root, val);

      if (!root[side]) {
        root[side] = new Node(val);
        break;
      } else {
        root = root[side]!;
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
    const side = this.leftOrRight(root, val);

    return root[side] !== undefined
      ? this.recursiveSearch(val, root[side])
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
      const side = this.leftOrRight(root, val);
      if (val === root.value) {
        return val;
      } else {
        root = root[side];
      }
    }
    return undefined;
  }

  private leftOrRight = (root: Node<T>, val: T) =>
    val < root.value ? "left" : "right";
}

export default BinarySearchTree;
