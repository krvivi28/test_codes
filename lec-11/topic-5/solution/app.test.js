import request from "supertest";
import app from "./index.js";
describe("GET /test-custome-error", () => {
  it("The response should be 'testing app-level custom error handling middleware,' as we intentionally threw this custom error with a status code of 505", async () => {
    const response = await request(app).get("/test-custome-error");
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
