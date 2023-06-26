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

it("test Protected route", async () => {
  const regResp = await request(app)
    .post("/register")
    .type("form")
    .send({ name: "vivek", email: "krvivi28@gmail.com", password: "vivek28@" });
  console.log(regResp.text);
  const logResp = await request(app)
    .post("/login")
    .type("form")
    .send({ email: "krvivi28@gmail.com", password: "vivek28@" });
  console.log(logResp.text);
  const response = await request(app).get("/");
  expect(response.statusCode).toBe(200);
  expect(response.text).toContain("there is always one more bug to fix");
  console.log(response.text);
});
