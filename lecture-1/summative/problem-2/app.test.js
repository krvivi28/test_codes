const request = require("supertest");
const server = require(".");

afterAll(async () => {
  await server.close();
});

describe("Server runs correctly", () => {
  test("It should return the required text and status code", async () => {
    const response = await request(server).get("/");

    expect(response.status).toBe(200);
    expect(response.text).toMatch(/i am a ninja/i);
  });
});
