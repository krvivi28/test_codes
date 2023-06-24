import request from "supertest";
import app from "./index.js";

describe("Form Validation", () => {
  it("should validate the form fields", async () => {
    const response = await request(app).post("/addblog").type("form").send({
      title: "My Blog Title",
      description: "My Blog Description",
      image: "https://example.com/image.jpg",
    });

    expect(response.text).toMatch(/validation successful/i);
  });

  it("should display error messages for invalid form fields", async () => {
    const response = await request(app).post("/addblog").type("form").send({
      title: "My",
      description: "My Blog",
      image: "invalid-url",
    });
    expect(response.text).toMatch(
      /The title field should contain at least 3 characters/i
    );
    expect(response.text).toMatch(
      /The description field should contain at least 10 characters/i
    );
    expect(response.text).toMatch(
      /The image URL provided should be a valid URL/i
    );
  });

  it("should display error messages for empty form fields", async () => {
    const response = await request(app).post("/addblog").type("form").send({
      title: "",
      description: "",
      image: "",
    });
    expect(response.text).toMatch(/The title field should not be empty/i);
    expect(response.text).toMatch(/The description field should not be empty/i);
    expect(response.text).toMatch(
      /The image URL provided should be a valid URL/i
    );
  });
});
