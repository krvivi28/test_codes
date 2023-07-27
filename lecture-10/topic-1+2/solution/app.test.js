import request from "supertest";
import app from "./index.js";

describe("GET /api/product", () => {
  it("The API should not be accessible to users without JWT cookie.", async () => {
    const response = await request(app).get("/api/product");

    expect(response.statusCode).toBe(401);
  });
  it("The API should be accessible to users who have logged in with JWT.", async () => {
    const logResp = await request(app)
      .post("/api/user/login")
      .send({ email: "krvivi28@gmail.com", password: "vivek28@" });
    const cookies = logResp.header["set-cookie"];
    const response = await request(app)
      .get("/api/product")
      .set("Cookie", cookies);
    expect(response.statusCode).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.header["content-type"]).toBe(
      "application/json; charset=utf-8"
    );
  });
});
