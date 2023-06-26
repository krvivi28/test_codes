import request from "supertest";
import app from "./index";

describe("GET /", () => {
  it("should redirect to login if user is not authenticated", async () => {
    const response = await request(app).get("/");
    expect(response.header.location).toBe("/login");
  });
});
describe("GET /", () => {
  it("test Protected route", async () => {
    const resp = await request(app)
      .post("/login")
      .type("form")
      .send({ email: "test@example.com", password: "password" });
    const cookies = resp.header["set-cookie"];
    const response = await request(app).get("/").set("Cookie", cookies);
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("Please enter a number between 1 and 10");
  });
});
