// Import the necessary modules and functions
import request from "supertest";
import app from "./index.js";
import ProductController from "./controllers/productController.js";

const productController = new ProductController();

describe("POST /", () => {
  it("should update user data and render update-form view with updated user data", async () => {
    const response = await request(app).post("/search").type("form").send({
      name: "apple",
    });

    expect(response.status).toBe(200);
    expect(response.text).toContain("apple");
    expect(response.text).toContain(
      "https://w7.pngwing.com/pngs/48/384/png-transparent-apple-logo-business-desktop-apple-heart-computer-logo.png"
    );
  });
});

describe("search", () => {
  it("should render searchResults view with matching products", () => {
    const req = {
      body: {
        name: "apple",
      },
    };
    const res = {
      render: jest.fn(),
    };

    productController.search(req, res);

    expect(res.render).toHaveBeenCalledWith("searchResults", {
      products: [
        {
          id: 1,
          image:
            "https://w7.pngwing.com/pngs/48/384/png-transparent-apple-logo-business-desktop-apple-heart-computer-logo.png",
          name: "apple",
        },
        {
          id: 5,
          image:
            "https://www.citypng.com/public/uploads/preview/-21602680152czvchasxso.png",
          name: "apple",
        },
      ],
    });
  });
});
