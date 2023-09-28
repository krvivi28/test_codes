import mongoose from "mongoose";
import request from "supertest";
import app from "./app.js";
import connectToDb from "./src/config/db.js";

describe("Book API Endpoints", () => {
  beforeAll(async () => {
    // Connect to a test database before running tests
    await connectToDb();
  });

  afterAll(async () => {
    // Disconnect from the test database after running tests
    await mongoose.disconnect();
  });

  beforeEach(async () => {
    // Clear the test database and reset any data
    await mongoose.connection.db.dropDatabase();
  });

  describe("Job Feature", () => {
    it("should post a new job by user of type recruiter", async () => {
      const newJobData = {
        title: "SDE-1",
        description:
          "coding ninjas is hiring for the position of SDE-1 on-site Gurgao-IN",
        company: "Coding Ninjas",
        salary: 1600000,
      };

      const userData = {
        name: "Test User",
        email: "test@example.com",
        mobile: "9123456789",
        age: 25,
        password: "testpassword",
        type: "recruiter",
      };

      await request(app).post("/codingninjas/api/user/register").send(userData);
      const userCredentials = {
        email: "test@example.com",
        password: "testpassword",
      };

      const loginResponse = await request(app)
        .post("/codingninjas/api/user/login")
        .send(userCredentials);

      const token = loginResponse.body.token;

      const jobPostResponse = await request(app)
        .post("/codingninjas/api/job/post")
        .set("Cookie", [`jwtToken=${token}`])
        .send(newJobData)
        .expect(201);
      expect(jobPostResponse.body.job_description.title).toBe("SDE-1");
      expect(jobPostResponse.body.job_description.salary).toBe(1600000);
    });
  });
  describe("Job Feature", () => {
    it("user of type other than recruiter can't post job", async () => {
      const newJobData = {
        title: "SDE-1",
        description:
          "coding ninjas is hiring for the position of SDE-1 on-site Gurgao-IN",
        company: "Coding Ninjas",
        salary: 1600000,
      };

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
        email: "test@example.com",
        password: "testpassword",
      };

      const loginResponse = await request(app)
        .post("/codingninjas/api/user/login")
        .send(userCredentials);

      const token = loginResponse.body.token;

      const jobPostResponse = await request(app)
        .post("/codingninjas/api/job/post")
        .set("Cookie", [`jwtToken=${token}`])
        .send(newJobData)
        .expect(400);
    });
  });

  describe("Job Apply Feature", () => {
    it("user should be able to apply for a job", async () => {
      const newJobData = {
        title: "SDE-1",
        description:
          "coding ninjas is hiring for the position of SDE-1 on-site Gurgao-IN",
        company: "Coding Ninjas",
        salary: 1600000,
      };

      const userData = {
        name: "Test User",
        email: "test@example.com",
        mobile: "9123456789",
        age: 25,
        password: "testpassword",
        type: "recruiter",
      };

      await request(app).post("/codingninjas/api/user/register").send(userData);
      const userCredentials = {
        email: "test@example.com",
        password: "testpassword",
      };

      const loginResponse = await request(app)
        .post("/codingninjas/api/user/login")
        .send(userCredentials);

      const token = loginResponse.body.token;

      const jobPostResponse = await request(app)
        .post("/codingninjas/api/job/post")
        .set("Cookie", [`jwtToken=${token}`])
        .send(newJobData);

      const jobPostResponseId = jobPostResponse.body.job_description._id;

      const applyResponse = await request(app)
        .get(`/codingninjas/api/job/apply/${jobPostResponseId}`)
        .set("Cookie", [`jwtToken=${token}`]);

      const responseBody = JSON.parse(applyResponse.text);
      expect(responseBody.resp.applicants.length).toBeGreaterThan(0);
    });
  });
  describe("Job Apply Feature", () => {
    it("users cannot apply for the same job multiple times", async () => {
      const newJobData = {
        title: "SDE-1",
        description:
          "coding ninjas is hiring for the position of SDE-1 on-site Gurgao-IN",
        company: "Coding Ninjas",
        salary: 1600000,
      };

      const userData = {
        name: "Test User",
        email: "test@example.com",
        mobile: "9123456789",
        age: 25,
        password: "testpassword",
        type: "recruiter",
      };

      await request(app).post("/codingninjas/api/user/register").send(userData);
      const userCredentials = {
        email: "test@example.com",
        password: "testpassword",
      };

      const loginResponse = await request(app)
        .post("/codingninjas/api/user/login")
        .send(userCredentials);

      const token = loginResponse.body.token;

      const jobPostResponse = await request(app)
        .post("/codingninjas/api/job/post")
        .set("Cookie", [`jwtToken=${token}`])
        .send(newJobData);

      const jobPostResponseId = jobPostResponse.body.job_description._id;

      const applyResponse = await request(app)
        .get(`/codingninjas/api/job/apply/${jobPostResponseId}`)
        .set("Cookie", [`jwtToken=${token}`]);
      await request(app)
        .get(`/codingninjas/api/job/apply/${jobPostResponseId}`)
        .set("Cookie", [`jwtToken=${token}`])
        .expect(400);
    });
  });
  describe("Liking a posted job", () => {
    it("user should be able to like a posted job", async () => {
      const newJobData = {
        title: "SDE-1",
        description:
          "coding ninjas is hiring for the position of SDE-1 on-site Gurgao-IN",
        company: "Coding Ninjas",
        salary: 1600000,
      };

      const userData = {
        name: "Test User",
        email: "test@example.com",
        mobile: "9123456789",
        age: 25,
        password: "testpassword",
        type: "recruiter",
      };

      await request(app).post("/codingninjas/api/user/register").send(userData);
      const userCredentials = {
        email: "test@example.com",
        password: "testpassword",
      };

      const loginResponse = await request(app)
        .post("/codingninjas/api/user/login")
        .send(userCredentials);

      const token = loginResponse.body.token;

      const jobPostResponse = await request(app)
        .post("/codingninjas/api/job/post")
        .set("Cookie", [`jwtToken=${token}`])
        .send(newJobData);

      const jobPostResponseId = jobPostResponse.body.job_description._id;

      const likeResponse = await request(app)
        .post(`/codingninjas/api/likes/like?model=Job&id=${jobPostResponseId}`)
        .set("Cookie", [`jwtToken=${token}`])
        .expect(201);

      const responseBody = JSON.parse(likeResponse.text);
      expect(responseBody).toHaveProperty("resp.user");
      expect(responseBody).toHaveProperty("resp.likeable");
    });
  });
});
