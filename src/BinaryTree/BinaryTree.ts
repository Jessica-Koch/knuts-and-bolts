import Node from '../BinarySearchTree/Node';

class BinaryTree<T extends string | number> {
  root: Node<T>;
  constructor(val: T) {
    this.root = new Node(val);
  }

  isMirrored(node: Node<T>) {
    return node;
  }

  printBreadth(rootNode?: Node<T>) {
    if (!rootNode) return;

    const q = [];
    q.push(rootNode);

    while (q.length > 0) {
      let currentNode: Node<T> = q[0];

      if (currentNode.left !== undefined) {
        q.push(currentNode.left)
      }

      if (currentNode.right !== undefined) {
        q.push(currentNode.right)
      }
      const n = q.shift()
      console.log('currentNode: ', n)
 me
    }

  }
}

export default BinaryTree;
