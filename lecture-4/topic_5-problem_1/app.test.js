const request = require("supertest");
const express = require("express");
const setCustomHeader = require(".");

describe("GET / - setCustomHeader", () => {
  let app;
  app = express();

  it("sets the custom header and sends the response", async () => {
    app.get("/", (req, res) => {
      setCustomHeader(res, "Content-Type", "text/plain");
      res.send("get method called!");
    });

    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.text).toBe("get method called!");
    expect(response.headers["content-type"]).toMatch(/text/);
  });
});
