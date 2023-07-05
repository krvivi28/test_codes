const request = require("supertest");
const server = require(".");

afterAll(async () => {
  await server.close();
});

describe("Server is setup on port 8080", () => {
  test("Server should send a response with the required text", async () => {
    const response = await request(server).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toMatch(/response received at port 8080/i);
  });
});
