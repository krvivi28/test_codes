import request from "supertest";
import mongoose from "mongoose";
import connectToDb from "./src/config/db.js";
import app from "./app.js";
import { userSchema } from "./src/features/user/user.schema.js";

jest.mock("mongoose");

beforeEach(() => {
  jest.clearAllMocks();
});

describe("connectToDb", () => {
  it("should successfully connect to the database", async () => {
    mongoose.connect.mockResolvedValueOnce({});
    await connectToDb();
    expect(mongoose.connect).toHaveBeenCalled();
  });
});

describe("User Registration", () => {
  it("should register a new user with valid data", async () => {
    const userData = {
      name: "Test User",
      email: "test@example.com",
      mobile: "1234567890",
      age: 25,
      password: "testpassword",
      type: "student",
    };

    const response = await request(app)
      .post("/codingninjas/api/user/register")
      .send(userData);
    console.log("test res is", response);
    expect(response.body.success).toBe(true);
    expect(response.body.msg).toBe("user registration successful");
    expect(response.body.res).toHaveProperty("_id");
    expect(response.body.res.name).toBe(userData.name);
  });
});
