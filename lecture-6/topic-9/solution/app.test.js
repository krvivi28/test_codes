// Import the necessary modules and functions
import request from "supertest";
import app from "./index.js";
import { updateUser } from "./user.controller.js";

describe("POST /", () => {
  it("should update user data and render update-form view with updated user data", async () => {
    const response = await request(app).post("/").type("form").send({
      name: "John Doe",
      email: "john.doe@example.com",
      image: "https://example.com/image.jpg",
    });

    expect(response.status).toBe(201);
    expect(response.text).toContain("John Doe");
    expect(response.text).toContain("john.doe@example.com");
    expect(response.text).toContain("https://example.com/image.jpg");
  });
});

describe("updateUser", () => {
  it('should render the "update-form" view', () => {
    const req = {};
    const res = {
      status: jest.fn(() => res),
      render: jest.fn(),
    };
    updateUser(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.render).toHaveBeenCalledWith("update-form", { user: undefined });
  });
});
