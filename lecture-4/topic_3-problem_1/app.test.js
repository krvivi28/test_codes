const request = require("supertest");
const app = require(".");

describe("GET /test - logging", () => {
  beforeEach(() => {
    jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("logs the request information", async () => {
    const response = await request(app).get("/");
    expect(console.log).toHaveBeenCalledWith("GET");
    expect(console.log).toHaveBeenCalledWith("/");
  });
});
