import request from "supertest";
import app from "./index.js";
describe("GET /", () => {
  it("The response should be 'testing app-level error handling middleware,' as we intentionally threw this custom error at the '/' controller route with a status code of 404", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(404);
    expect(response.text).not.toBe("");
    expect(response.text).toBe("testing app level error handling middleware");
  });
});
