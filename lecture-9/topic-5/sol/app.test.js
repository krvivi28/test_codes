import request from "supertest";
import app from "./index.js";

const username = "krvivi28@gmail.com";
const password = "vivek28@";
const authHeader =
  "Basic " + Buffer.from(`${username}:${password}`).toString("base64");

describe("Testing Product Api", () => {
  it("should respond with 401 Unauthorized without passing credentials", async () => {
    const response = await request(app).get("/api/product");
    expect(response.statusCode).toBe(401);
  });
});

describe("Testing Product Api", () => {
  it("should make a request with basic authentication", async () => {
    const response = await request(app)
      .get("/api/product")
      .set("Authorization", authHeader);
    console.log(response);
    expect(response.statusCode).toBe(200);
    expect(response.header["content-type"]).toBe(
      "application/json; charset=utf-8"
    );
    expect(response.body.success).toBe(true);
  });
});
