import request from "supertest";
import app from "./index.js";
describe("Testing userController function and GET request('/users') at  ", () => {
  it("should check status and respose of GET request('/users')", async () => {
    const res = await request(app).get("/users");
    expect(res.status).toBe(200);
    expect(res.header["content-type"]).toContain("text/html");
    expect(res.text).toContain("<!DOCTYPE html>");
    expect(res.text).toContain("male");
    expect(res.text).toContain("female");
  });
});
