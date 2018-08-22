class TreeNode<T extends string | number> {
  public value: string | number;
  public right?: TreeNode<T>;
  public left?: TreeNode<T>;

  public constructor(value: T) {
    this.value = value;
    this.left = undefined;
    this.right = undefined;
  }
}

export default TreeNode;
