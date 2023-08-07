import request from "supertest";
import app from "./index.js";
import fs from "fs";
describe("POST /api/user", () => {
  it(`Accessing this API should result in the logging of specific information for this route, including the request timestamp, URL, and request body`, async () => {
    const response = await request(app).post("/api/user").send({
      email: "krvivi28@gmail.com",
      password: "password@123",
    });
    const log_data = fs.readFileSync("combined.log", "utf8");
    expect(log_data).not.toBe("");
    expect(log_data).toMatch("krvivi28@gmail.com");
    expect(log_data).toMatch("/api/user");
  });
});
