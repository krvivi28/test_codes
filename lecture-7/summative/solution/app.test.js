import request from "supertest";
import app from "./index";

describe("GET /", () => {
  it("should redirect to login if user is not authenticated", async () => {
    const response = await request(app).get("/");
    expect(response.header.location).toBe("/login");
  });

//   it("should return ok if user is authenticated", async () => {
//     const response = await request(app)
//       .get("/")
//       .set("Cookie", ["userEmail=test@example.com"]);
//     expect(response.text).toContain("Let's Play");
//   });
});

describe("POST /guess", () => {
//   it("should return 200 if user is not authenticated", async () => {
//     const response = await request(app).post("/guess");
//     expect(response.header.location).toBe("/login");
//   });

  it("should return 200 and show success message if guess is correct", async () => {
    const response = await request(app)
      .post("/guess")
      .set("Cookie", ["userEmail=test@example.com"])
      .send({ input: 5 });
    expect(response.text).toContain(
      "Congratulations! You have guessed correctly."
    );
  });

//   it("should return 200 and show message for smaller number if guess is smaller", async () => {
//     const response = await request(app)
//       .post("/guess")
//       .set("Cookie", ["userEmail=test@example.com"])
//       .send({ input: 3 });
//     expect(response.text).toContain("think of a larger number");
//   });

//   it("should return 200 and show message for larger number if guess is larger", async () => {
//     const response = await request(app)
//       .post("/guess")
//       .set("Cookie", ["userEmail=test@example.com"])
//       .send({ input: 7 });
//     expect(response.text).toContain("think of a smaller number");
//   });
// });

// describe("GET /login", () => {
//   it("should return 200", async () => {
//     const response = await request(app).get("/login");
//     expect(response.text).toContain("Login");
//   });
// });

// describe("GET /signup", () => {
//   it("should return 200", async () => {
//     const response = await request(app).get("/signup");
//     expect(response.text).toContain("Register");
//   });
// });

// describe("POST /login", () => {
//   it("should return 200 if login is successful", async () => {
//     const response = await request(app)
//       .post("/login")
//       .send({ email: "test@example.com", password: "password" });
//     expect(response.header.location).toBe("/");
//   });

//   it("should return 200 with error message if login is unsuccessful", async () => {
//     const response = await request(app)
//       .post("/login")
//       .send({ email: "test@example.com", password: "wrongpassword" });

//     expect(response.text).toContain("Invalid Credentials!!");
//   });
// });
