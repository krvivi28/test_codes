import app from "./index.js";
import request from "supertest";

describe("File Upload", () => {
  it("should upload a file successfully", async () => {
    const response = await request(app)
      .post("/")
      .field("name", "Demo User")
      .field("email", "demouser@example.com");
    console.log(response.body);

    expect(response.body).toEqual({
      user: {
        name: "Demo User",
        email: "demouser@example.com",
      },
    });
    const uploadedFileName = response.body.user.filename;
    const filePath = path.resolve("public", "uploads", uploadedFileName);
    expect(fs.existsSync(filePath)).toBe(true);
  });
});
