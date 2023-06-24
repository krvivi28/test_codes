import UserController from "./src/controllers/user.controller";
import app from "./index.js";
import request from "supertest";
import { registerUser, users } from "./src/models/user.model";

const userController = new UserController();

describe("GET /register", () => {
  it("renders the user-register view", () => {
    const req = {};
    const res = {
      render: jest.fn(),
    };
    userController.getRegister(req, res);
    expect(res.render).toHaveBeenCalledWith("user-register");
  });
});
describe("GET /login", () => {
  it("renders the user-login view", () => {
    const req = {};
    const res = {
      render: jest.fn(),
    };
    userController.getLogin(req, res);
    expect(res.render).toHaveBeenCalledWith("user-login");
  });
});

describe("POST /register", () => {
  it("redirects to user-login view upon successful registration", async () => {
    const resp = await request(app).get("/register").type("form").send({
      name: "vivek",
      email: "krvivi28@gmail.com",
      password: "vivek28@",
    });
    expect(resp.status).toBe(200);
    expect(resp.header["content-type"]).toContain("text/html");
    expect(users[users.length - 1]).toEqual({
      id: users.length,
      name: "vivek",
      email: "krvivi28@gmail.com",
      password: "vivek28@",
    });
  });
});
describe("addUser", () => {
  it('should render the "user-login" view', () => {
    const req = {};
    const res = {
      status: jest.fn(() => res),
      render: jest.fn(),
    };
    userController.addUser(req, res);
    expect(res.render).toHaveBeenCalledWith("user-login");
  });
});

describe("POST /login", () => {
  it("should authenticate user and send proper message", async () => {
    const resp = await request(app).post("/login").type("form").send({
      email: "krvivi28@gmail.com",
      password: "vivek28@",
    });
    console.log(resp);
    expect(resp.status).toBe(200);
    expect(resp.body.message).toBe("login successfull");
  });
  it("should authenticate user and send proper message", async () => {
    const resp = await request(app).post("/login").type("form").send({
      email: "krvivi@gmail.com",
      password: "vivek@",
    });
    console.log(resp);
    expect(resp.status).toBe(200);
    expect(resp.body.message).toBe("login failed");
  });
});
