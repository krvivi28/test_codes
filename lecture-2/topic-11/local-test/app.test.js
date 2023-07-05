const path = require("path");
const { getAbsolutePath } = require("./pathResolver");

describe("getAbsolutePath function", () => {
  it("should return the absolute path of the given relative path", () => {
    const relativePath = "./src/file.txt";
    const expectedAbsolutePath = path.resolve(relativePath);

    const actualAbsolutePath = getAbsolutePath(relativePath);

    expect(actualAbsolutePath).toBe(expectedAbsolutePath);
  });

  it("should return the same path if an absolute path is provided", () => {
    const absolutePath = path.resolve("./src/file.txt");
    const actualAbsolutePath = getAbsolutePath(absolutePath);

    expect(actualAbsolutePath).toBe(absolutePath);
  });
});
