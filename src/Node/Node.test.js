const Node = require("./Node");

describe("Node", () => {
  test("Instantiates with value", () => {
    const n = new Node("bloop");

    expect(n.value).toBe("bloop");
    expect(n.next).toBeUndefined();
    expect(n.prev).toBeUndefined();
  });
});
