import request from "supertest";
import mongoose from "mongoose";
import connectToDb from "./src/config/db.js";
import app from "./app.js";

beforeAll(async () => {
  await connectToDb();
});

afterAll(async () => {
  await mongoose.connection.close();
});

beforeEach(async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany({});
  }
});

describe("User Registration", () => {
  it("should register a new user with valid data", async () => {
    const userData = {
      name: "Test User",
      email: "tesrfyyfrt@example.com",
      mobile: "12frgg34567890",
      age: 25,
      password: "testpassword",
      type: "student",
    };

    const response = await request(app)
      .post("/codingninjas/api/user/register")
      .send(userData);
    expect(response.statusCode).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.msg).toBe("user registration successful");
    expect(response.body.res).toHaveProperty("_id");
    expect(response.body.res.name).toBe(userData.name);
  });
});

// describe("User Registration", () => {
//   it("should handle registration with missing or invalid data", async () => {
//     const userData = {};
//     const response = await request(app)
//       .post("/codingninjas/api/user/register")
//       .send(userData);
//     // console.log("test res is", response);
//     expect(response.statusCode).toBe(400);
//     expect(response.body.success).toBe(false);
//     // expect(response.body.msg).toBe("user registration successful");
//     // expect(response.body.res).toHaveProperty("_id");
//     // expect(response.body.res.name).toBe(userData.name);
//   }, 10000);
// });

describe("User Login", () => {
  it("should log in a user with valid credentials", async () => {
    const userData = {
      name: "Test User",
      email: "test@example.com",
      mobile: "9123456789",
      age: 25,
      password: "testpassword",
      type: "student",
    };
    await request(app).post("/codingninjas/api/user/register").send(userData);
    const userCredentials = {
      email: "test@example.com", // Use the email of the user registered in the previous test
      password: "testpassword",
    };

    const response = await request(app)
      .post("/codingninjas/api/user/login")
      .send(userCredentials)
      .expect(200);

    expect(response.body.success).toBe(true);
    expect(response.body.msg).toBe("user login successful");
  });

  it("should handle login with invalid credentials", async () => {
    const userData = {
      name: "Test User",
      email: "test@example.com",
      mobile: "9123456789",
      age: 25,
      password: "testpassword",
      type: "student",
    };
    await request(app).post("/codingninjas/api/user/register").send(userData);
    const invalidCredentials = {
      email: "test@example.com", // Use the email of the user registered in the previous test
      password: "testpassword2",
    };

    const response = await request(app)
      .post("/codingninjas/api/user/login")
      .send(invalidCredentials)
      .expect(400);
    expect(response.body.success).toBe(false);
  });
});

// describe("Update User Password", () => {
//   it("should update the user password", async () => {
//     const newPasswordData = {
//       newPassword: "newtestpassword",
//     };

//     // Assuming you have a user authenticated and you have their token
//     // You can use the token for authentication
//     const token = "your_authentication_token_here";

//     const response = await request(app)
//       .post("/codingninjas/api/user/update/password")
//       .set("Cookie", [`jwtToken=${token}`])
//       .send(newPasswordData)
//       .expect(201);

//     expect(response.body.success).toBe(true);
//     expect(response.body.msg).toBe("password updated successfully");
//     expect(response.body.res).toHaveProperty("_id");
//     // Add more assertions as needed
//   });

//   it("should handle invalid password update request", async () => {
//     const invalidPasswordData = {
//       // Provide invalid password data (e.g., missing required fields)
//     };

//     // Assuming you have a user authenticated and you have their token
//     // You can use the token for authentication
//     const token = "your_authentication_token_here";

//     const response = await request(app)
//       .post("/codingninjas/api/user/update/password")
//       .set("Cookie", [`jwtToken=${token}`])
//       .send(invalidPasswordData)
//       .expect(400);

//     expect(response.body.success).toBe(false);
//     expect(response.body.error).toHaveProperty("statusCode");
//     expect(response.body.error).toHaveProperty("msg");
//     // Add more assertions as needed
//   });
// });
