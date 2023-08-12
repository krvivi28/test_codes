import request from "supertest";
import app from "./index.js";
import fs from "fs";

describe("logging encountered error", () => {
  it("The encountered custom error should be logged to the error.log file.", async () => {
    const response = await request(app).get("/test-custom-error");
    const error_log_data = fs.readFileSync("error.log", "utf8");
    expect(response.statusCode).toBe(505);
    expect(response.text).not.toBe("");
    expect(error_log_data).not.toBe("");
    expect(error_log_data).toMatch(
      "testing app level custom error handling middleware"
    );
  });

  it("The encountered unhandled error should be logged to the error.log file.", async () => {
    const response = await request(app).get("/test-unhandled-error");
    const error_log_data = fs.readFileSync("error.log", "utf8");
    expect(response.statusCode).toBe(500);
    expect(response.text).not.toBe("");
    expect(error_log_data).not.toBe("");
    expect(error_log_data).toMatch(
      "testing app level custom error handling middleware"
    );
  });
});

describe("GET /test-custom-error", () => {
  it("The response should be 'testing app-level custom error handling middleware,' as we intentionally threw this custom error with a status code of 505", async () => {
    const response = await request(app).get("/test-custom-error");
    console.log(response);
    expect(response.statusCode).toBe(505);
    expect(response.text).not.toBe("");
    expect(response.text).toMatch(
      "testing app level custom error handling middleware"
    );
  });
});

describe("GET /test-unhandled-error", () => {
  it("Testing unhandled errors must trigger a '500' Internal Server Error with the message 'oops! something went wrong...Try again later!", async () => {
    const response = await request(app).get("/test-unhandled-error");
    expect(response.statusCode).toBe(500);
    expect(response.text).not.toBe("");
  });
});
