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
    expect(response.text).toBe(
      '{"success":true,"products":[{"id":1,"name":"iphone","price":10000},{"id":2,"name":"iphone","price":10000},{"id":3,"name":"iphone","price":10000}]}'
    );
  });
});
