import { mean, sum } from "./math.mjs";

describe("codebase to comply with the ES6 module syntax", () => {
  it("should print sum of arr [100,10,1] to be 111", () => {
    expect(sum([100, 10, 1])).toBe(111);
  });
  it("should mean of arr [100,10,1] to be 37", () => {
    expect(mean([100, 10, 1])).toBe(37);
  });
});
