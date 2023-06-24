import request from "supertest";
import app from "./index.js";
import { renderBlogForm } from "./src/controllers/blog.controller.js";

describe("Blog Creation Form and Routing", () => {
  // Test the GET route for rendering the blog creation form
  describe("GET /createblog", () => {
    it("should render the blog creation form", async () => {
      const response = await request(app).get("/createblog");
      expect(response.status).toBe(200);
      expect(response.header["content-type"]).toContain("text/html");
      expect(response.text).toMatch(/text/i);
      expect(response.text).toMatch(/title/i);
      expect(response.text).toMatch(/submit/i);
      expect(response.text).toMatch(/description/i);
    });
  });

  // Test the renderBlogForm function
  describe("renderBlogForm", () => {
    it('should render the "createBlog" view', () => {
      const req = {};
      const res = {
        status: jest.fn(() => res),
        render: jest.fn(),
      };
      renderBlogForm(req, res);
      expect(res.render).toHaveBeenCalledWith("createBlog");
    });
  });
});
