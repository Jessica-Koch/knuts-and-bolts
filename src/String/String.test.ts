import { numOccur } from "./String";

describe("String", () => {
  describe("numOccur", () => {
    it("returns 0 for an empty string", () => {
      expect(numOccur("p", "")).toBe(0);
    });
    it("counts the number of occurrances in a string", () => {
      expect(numOccur("p", "puppy")).toBe(3);
    });
  });
});
