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
    expect(response.header["www-authenticate"]).toBe("Basic");
    console.log(response.header);
  });
});

describe("Testing Product Api", () => {
  it("should make a request with basic authentication", async () => {
    const response = await request(app)
      .get("/api/product")
      .set("Authorization", authHeader);
    expect(response.statusCode).toBe(200);
  });
});
