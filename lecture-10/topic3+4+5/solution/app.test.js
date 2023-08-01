import request from "supertest";
import app from "./index.js";

describe("POST /api/cart", () => {
  it("The API should should not allow users to add a product to the cart if not logged In", async () => {
    const response = await request(app).post(
      "/api/cart/?productId=2&quantity=5"
    );
    expect(response.statusCode).toBe(401);
    expect(response.text).toBe('{"success":false,"msg":"login to continue"}');
  });
});
describe("POST /api/cart", () => {
  it("The API should should allow users to add a product to the cart by passing the productId and quantity as query parameters.", async () => {
    const logResp = await request(app)
      .post("/api/user/login")
      .send({ email: "krvivi28@gmail.com", password: "vivek28@" });
    const cookies = logResp.header["set-cookie"];
    const response = await request(app)
      .post("/api/cart/?productId=2&quantity=5")
      .set("Cookie", cookies);
    expect(response.body.success).toBe(true);
  });
});

describe("DELETE /api/cart/:itemId", () => {
  it("The API should should allow a logged in user to delete a cart item from the cart by passing cart item id as params", async () => {
    const logResp = await request(app)
      .post("/api/user/login")
      .send({ email: "krvivi28@gmail.com", password: "vivek28@" });
    const cookies = logResp.header["set-cookie"];
    const response = await request(app)
      .delete("/api/cart/1")
      .set("Cookie", cookies);
    expect(response.body.success).toBe(true);
  });
  it("The API should should allow a logged in user to delete a cart item from the cart by passing invalid cart item id as params", async () => {
    const logResp = await request(app)
      .post("/api/user/login")
      .send({ email: "krvivi28@gmail.com", password: "vivek28@" });
    const cookies = logResp.header["set-cookie"];
    const response = await request(app)
      .delete("/api/cart/100")
      .set("Cookie", cookies);
    expect(response.body.success).toBe(false);
  });
});
