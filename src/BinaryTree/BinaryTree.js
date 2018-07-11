import Node from "../BinarySearchTree/Node";
import Queue from "../Queue/Queue";

function BinaryTree(val) {
  this.root = new Node(val);
}

BinaryTree.prototype.isMirrored = function(node) {
  if (!node) return false;
  return this.isMirroredUtility(node.left, node.right);
};

BinaryTree.prototype.isMirroredUtility = function(node1, node2) {
  if (!node1 && !node2) {
    return true;
  }

  if ((!node1 && node2) || (node1 && !node2)) {
    return false;
  }

  if (node1.value !== node2.value) {
    return false;
  }

  return (
    this.isMirroredUtility(node1.left, node2.right) &&
    this.isMirroredUtility(node1.right, node2.left)
  );
};

BinaryTree.prototype.printBreadth = function() {
  const q = new Queue();
  let root = this.root;

  if (!root) return;

  q.enqueue(root.value);
  while (q.length > 0) {
    if (root.left) {
      q.enqueue(root.left.value);
    } else if (root.right) {
      q.enqueue(root.right.value);
    }
    root = root.left;
  }

  return q;
};

export default BinaryTree;
