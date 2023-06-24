// const request = require("supertest");
// const express = require("express");
// const tweetRoutes = require("./src/features/tweet/tweet.routes");

import request from "supertest";
import express from "express";
import tweetRoutes from "./src/features/tweet/tweet.routes.js";

describe("tweets routes", () => {
  let server;

  beforeAll(() => {
    server = express();
    server.use("/api/tweets", tweetRoutes);
  });

  it("GET /api/tweets", async () => {
    const response = await request(server).get("/api/tweets");
    expect(response.status).toBe(200);
    expect(response.text).toEqual("GET tweets called!");
  });

  it("POST /api/tweets", async () => {
    const response = await request(server).post("/api/tweets");
    expect(response.status).toBe(200);
    expect(response.text).toEqual("POST tweet created!");
  });
});
