import request from "supertest";
import app from "./index.js";

describe("User Registeration API", () => {
  it("should add a new user to the 'users' array and respond with a JSON response with a status code of 201 indicating success", async () => {
    const response = await request(app).post("/api/user/register").send({
      name: "echo",
      email: "offecho28@gmail.com",
      password: "vivek28@",
    });
    expect(response.statusCode).toBe(201);
    expect(response.body.status).toBe("success");
    expect(response.body.user).toEqual({
      id: 2,
      name: "echo",
      email: "offecho28@gmail.com",
      password: "vivek28@",
    });
    expect(response.header["content-type"]).toBe(
      "application/json; charset=utf-8"
    );
  });
});

describe("User Login API", () => {
  it("should verify(with incorrect credentials) if a user attempting to log in is valid or not", async () => {
    await request(app).post("/api/user/register").send({
      name: "echo",
      email: "offecho28@gmail.com",
      password: "vivek28@",
    });
    const response = await request(app).post("/api/user/login").send({
      email: "offecho2810@gmail.com",
      password: "vivek28@",
    });
    expect(response.statusCode).toBe(400);
    expect(response.body.status).toBe("failure");
    expect(response.body.msg).toBe("invalid user details");
    expect(response.header["content-type"]).toBe(
      "application/json; charset=utf-8"
    );
  });
});
describe("User Login API", () => {
  it("should verify(with correct credentials), if a user attempting to log in is valid or not", async () => {
    await request(app).post("/api/user/register").send({
      name: "echo",
      email: "offecho28@gmail.com",
      password: "vivek28@",
    });
    const response = await request(app).post("/api/user/login").send({
      email: "offecho28@gmail.com",
      password: "vivek28@",
    });
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("success");
    expect(response.body.msg).toBe("login successful");
    expect(response.header["content-type"]).toBe(
      "application/json; charset=utf-8"
    );
  });
});
