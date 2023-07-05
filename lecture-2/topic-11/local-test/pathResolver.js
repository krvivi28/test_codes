const path = require("path");
exports.getAbsolutePath = (filePath) => {
  return path.resolve(filePath);
};

// In the provided code snippet, the "path.resolve()" method is used to resolve the given file path to its absolute path.
