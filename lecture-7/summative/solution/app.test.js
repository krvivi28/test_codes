import request from "supertest";
import app from "./index.js";

describe("GET /", () => {
  it("should redirect to login if user is not authenticated", async () => {
    const response = await request(app).get("/");
    expect(response.header.location).toBe("/login");
  });
});

describe("GET /", () => {
  it("The 'index.ejs' view should only be accessible to users who have logged in", async () => {
    const logResp = await request(app)
      .post("/login")
      .type("form")
      .send({ email: "krvivi28@gmail.com", password: "vivek28@" });
    const cookies = logResp.header["set-cookie"];
    console.log(cookies);
    const response = await request(app).get("/").set("Cookie", cookies);
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("Please enter a number between 1 and 10");
    console.log(response.header);
  });

  it("'generateRandomNumber' inside the file 'middleware/generateRandomNumber.js' to generate a random number between 1 and 10. Set this number as a cookie named 'randomNumber' with a 1-day expiration.", async () => {
    const logResp = await request(app)
      .post("/login")
      .type("form")
      .send({ email: "krvivi28@gmail.com", password: "vivek28@" });
    const cookies = logResp.header["set-cookie"];
    console.log(cookies);
    const response = await request(app).get("/").set("Cookie", cookies);

    console.log(response.header);
    expect(response.header["set-cookie"][0]).toMatch(
      /randomNumber=\d+;\sMax-Age=\d+;\sPath=\/;\sExpires=[\w\s,:]+\sGMT/i
    );
  });
});
