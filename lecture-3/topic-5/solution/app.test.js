import server from "./index.js";
import request from "supertest";
import fs from "fs";

jest.mock("fs");

const consoleSpy = jest.spyOn(console, "log");
const payload = { message: "Be yourself; everyone else is already taken." };
const filePath = "data.txt";

beforeEach(() => {
  jest.clearAllMocks();
  fs.appendFileSync.mockClear();
  fs.readFileSync.mockClear();
});

afterAll(() => {
  server.close();
});

describe("Server", () => {
  it("should handle POST requests and append the request body data to a file", async () => {
    const response = await request(server).post("/").send(payload);

    expect(response.status).toBe(200);
    expect(fs.appendFileSync).toHaveBeenCalledTimes(1);
    expect(fs.appendFileSync).toHaveBeenCalledWith(
      filePath,
      JSON.stringify(payload)
    );
  });

  it("should read and print the contents of the file", async () => {
    fs.readFileSync.mockReturnValueOnce(JSON.stringify(payload));

    const response = await request(server).post("/").send(payload);

    expect(response.status).toBe(200);
    expect(fs.readFileSync).toHaveBeenCalledTimes(1);
    expect(fs.readFileSync).toHaveBeenCalledWith(filePath, "utf-8");

    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy.mock.calls[0][0]).toMatch(JSON.stringify(payload));
  });
});
