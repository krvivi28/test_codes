import request from "supertest";
import app from "./index.js";
import fs from "fs";
describe("GET /", () => {
  it("The response should be 'testing app-level error handling middleware,' as we intentionally threw this custom error at the '/' controller route with a status code of 404. It should log the error to the error.log file.", async () => {
    const response = await request(app).get("/");
    const error_log_data = fs.readFileSync("error.log", "utf8");
    expect(response.statusCode).toBe(404);
    expect(response.text).not.toBe("");
    expect(error_log_data).not.toBe("");
    expect(error_log_data).toMatch(
      "testing app level error handling middleware"
    );
  });
});
