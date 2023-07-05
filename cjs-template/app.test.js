const { sum } = require("./module");

describe("testing common js", () => {
  it("should print 1+2=3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
