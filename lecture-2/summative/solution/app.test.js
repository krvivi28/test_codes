import { publishBlog, writeBlog } from "./blogActions.js";
import fs from "fs";
beforeEach(() => {
  fs.writeFileSync("myblog.txt", "");
});
describe("Blog Actions", () => {
  it("writeBlog should write the blog content to file", () => {
    const content = "This is my blog content";
    writeBlog("myblog.txt", content);
    const fileContent = fs.readFileSync("myblog.txt", "utf-8");
    expect(fileContent).toEqual(content);
  });

  it("publishBlog should return the blog content from file", () => {
    const content = "This is my blog content";
    fs.writeFileSync("mytext.txt", content);
    const publishedBlog = publishBlog("mytext.txt");
    expect(publishedBlog).toEqual(content);
  });
});
