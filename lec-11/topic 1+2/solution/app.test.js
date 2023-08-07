import request from "supertest";
import app from "./index.js";
import fs from "fs";
describe("POST /api/user", () => {
  it(`Accessing this API should result in the logging of specific information for this route, including the request timestamp, URL, and request body in the log.txt file`, async () => {
    const response = await request(app).post("/api/user").send({
      email: "test@gmail.com",
      password: "password@123",
    });
    const log_data = fs.readFileSync("log.txt", "utf8");
    expect(log_data).not.toBe("");
    expect(log_data).toMatch("test@gmail.com");
    expect(log_data).toMatch("password@123");
    expect(log_data).toMatch("/api/user");
  });
});
