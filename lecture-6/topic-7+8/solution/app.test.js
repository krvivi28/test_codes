import server from "./index.js";
import request from "supertest";
import { updateUser } from "./user.controller.js";
import { users } from "./user.model.js";
const initialUsersLength = users.length;

describe("POST /", () => {
  it("should update users array and render update-form view with updated user data", async () => {
    const response = await request(server).post("/").type("form").send({
      name: "John Doe",
      email: "john.doe@example.com",
      image: "https://example.com/image.jpg",
    });

    expect(response.text).toContain("John Doe");
    expect(response.text).toContain("john.doe@example.com");
    expect(response.text).toContain("https://example.com/image.jpg");
    expect(users.length).toBe(initialUsersLength + 1);
    expect(users[users.length - 1]).toEqual({
      name: "John Doe",
      email: "john.doe@example.com",
      image: "https://example.com/image.jpg",
    });
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
    expect(res.render).toHaveBeenCalledWith("update-form", { user: undefined });
  });
});
