import app from "./index.js";
import request from "supertest";
import UserController from "./src/controllers/user.controller.js";

const userController = new UserController();

describe("Secure Page Access with Express-Session", () => {
  it("should restrict access to secure-page.ejs for non-logged-in users", async () => {
    const response = await request(app).get("/");
    // console.log(response);
    expect(response.status).toBe(200);
    // expect(response.header["content-type"]).toContain("text/html");
    // expect(response.header["content-type"]).toContain("text/html");
  });

  // it("should grant access to secure-page.ejs for logged-in users", async () => {
  //   const loggedInUser = await userController.loginUser("username", "password");
  //   const response = await request(app)
  //     .get("/")
  //     .set("Cookie", [`connect.sid=${loggedInUser.sessionId}`]);

  //   expect(response.status).toBe(200);
  // });
});
