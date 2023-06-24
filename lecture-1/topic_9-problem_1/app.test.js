const request = require("supertest");
const fs = require("fs");
const server = require("./index.js");

afterAll(async () => {
  await server.close();
});

describe("Server runs correctly", () => {
  test("It should return the required HTML File", async () => {
    const response = await request(server).get("/");
    const htmlString = fs.readFileSync("index.html").toString();
    expect(response.status).toBe(200);
    expect(response.text).toMatch(htmlString);
  });
});
