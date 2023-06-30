const request = require("supertest");
const express = require("express");
const path = require("path");
const { renderStatic } = require(".");

describe("GET /index.html - serving static file", () => {
  let server;
  server = express();
  const staticPath = path.join(__dirname, "public");
  renderStatic(server, staticPath);

  it("serves the index.html file", async () => {
    const response = await request(server).get("/index.html");
    expect(response.status).toBe(200);
    expect(response.text).toContain("<html");
  });
});
