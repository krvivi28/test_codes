import app from "./index";
import request from "supertest";
import { getProducts } from "./src/controllers/product.controller";
import path from "path";
describe("Testing 'getProducts' function", () => {
  it("should ensure that when a user sends a GET request to port 3000 (/), the index.html file gets rendered.", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.header["content-type"]).toContain("text/html");
    expect(res.text).toContain("Be a Coding Ninja");
  });
  describe("getProducts", () => {
    it("should send the index.html file", () => {
      const req = {};
      const res = {
        sendFile: jest.fn(),
      };

      getProducts(req, res);

      expect(res.sendFile).toHaveBeenCalledWith(
        path.resolve("src", "views", "index.html")
      );
    });
  });
});
