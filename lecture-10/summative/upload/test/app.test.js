import path from "path";
import fs from "fs";

describe("Testing front-end html data", () => {
  it("frontend part, needs to fetch a list of employees from the API 'http://localhost:4000/api/v1/emp' and display it on the HTML page", async () => {
    const index_data = fs.readFileSync(path.resolve("index.js")).toString();
    console.log(index_data);
    expect(index_data).toMatch(/\bcors\b/i);
  });
});
