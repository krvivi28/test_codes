const { server } = require(".");
const request = require("supertest");

describe("Express Server", () => {
  it("responds with 'Be a Coding Ninja.' when a GET request is made to '/'", async () => {
    const response = await request(server).get("/");
    expect(response.status).toEqual(200);
    expect(response.text).toEqual("Be a Coding Ninja.");
  });
});
