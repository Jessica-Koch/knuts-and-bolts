const Node = require("./Node");

describe("Node", () => {
  test("Instantiates with value", () => {
    const node = new Node("bloop");

    expect(node.value).toBe("bloop");
    expect(node.left).toBeUndefined();
    expect(node.right).toBeUndefined();
  });
});
