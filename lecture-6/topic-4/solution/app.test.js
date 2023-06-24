import request from "supertest";
import app from "./index.js";

describe("User Controller", () => {
  it('should "user added !" when valid form data is provided', async () => {
    const response = await request(app)
      .post("/new")
      .send({ name: "John Doe", mobile: "1234567890" });
    expect(response.text).toBe("user added !");
  });
  it("should return error messages when invalid form data is provided", async () => {
    const response = await request(app)
      .post("/new")
      .send({ name: "John", mobile: "1234" });
    expect(response.body).toEqual({
      name: "enter valid name of length greater than 4",
      mobile: "enter valid mobile number of 10 digits",
    });
  });
});
