import app from "./index.js";
import request from "supertest";
import UserController from "./src/controllers/user.controller.js";
import { auth } from "./src/middleware/auth.js";
const userController = new UserController();

describe("Secure Page Access with Express-Session", () => {
  it("should restrict access to secure-page.ejs for non-logged-in users", async () => {
    const authMiddleware = (req, res, next) => {
      next();
    };
    const testApp = app;
    testApp.use("/", authMiddleware);
    testApp.get("/", userController.getSecure);
    const response = await request(testApp).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toContain("login first to access secure page");
  });
});

describe("Implement secure access to the 'secure-page.ejs' view", () => {
  it("The 'secure-page.ejs' view should only be accessible to users who have logged in", async () => {
    const regResp = await request(app).post("/register").type("form").send({
      name: "vivek",
      email: "krvivi28@gmail.com",
      password: "vivek28@",
    });
    const logResp = await request(app)
      .post("/login")
      .type("form")
      .send({ email: "krvivi28@gmail.com", password: "vivek28@" });
    const cookies = logResp.header["set-cookie"];
    console.log(cookies);
    const response = await request(app).get("/").set("Cookie", cookies);
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("There is always one more bug to fix");
  });
});
