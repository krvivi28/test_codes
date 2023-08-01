import request from "supertest";
import app from "./index.js";

describe("POST /api/cart", () => {
  it("The API should should not allow users to add a product to the cart if not logged In", async () => {
    const response = await request(app).post(
      "/api/cart/?productId=2&quantity=5"
    );

    console.log(response);
    expect(response.statusCode).toBe(401);
    expect(response.text).toBe('{"success":false,"msg":"login to continue"}');
  });
  // it("The API should be accessible to users who have logged in with JWT.", async () => {
  //   const logResp = await request(app)
  //     .post("/api/user/login")
  //     .send({ email: "krvivi28@gmail.com", password: "vivek28@" });
  //   const cookies = logResp.header["set-cookie"];
  //   const response = await request(app)
  //     .get("/api/product")
  //     .set("Cookie", cookies);
  //   expect(response.statusCode).toBe(200);
  //   expect(response.body.success).toBe(true);
  //   expect(response.header["content-type"]).toBe(
  //     "application/json; charset=utf-8"
  //   );
  // });
});
// describe("POST /api/cart", () => {
//   it("The API should should allow users to add a product to the cart by passing the productId and quantity as query parameters.", async () => {
//     const response = await request(app).post(
//       "/api/cart/?productId=2&quantity=5"
//     );

//     console.log(response);
//     expect(response.statusCode).toBe(201);
//   });
//   // it("The API should be accessible to users who have logged in with JWT.", async () => {
//   //   const logResp = await request(app)
//   //     .post("/api/user/login")
//   //     .send({ email: "krvivi28@gmail.com", password: "vivek28@" });
//   //   const cookies = logResp.header["set-cookie"];
//   //   const response = await request(app)
//   //     .get("/api/product")
//   //     .set("Cookie", cookies);
//   //   expect(response.statusCode).toBe(200);
//   //   expect(response.body.success).toBe(true);
//   //   expect(response.header["content-type"]).toBe(
//   //     "application/json; charset=utf-8"
//   //   );
//   // });
// });
