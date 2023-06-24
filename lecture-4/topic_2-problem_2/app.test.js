const { server, startServer } = require(".");
const request = require("supertest");

describe("Express Server", () => {
  it("responds with 'Be a Coding Ninja.' when a GET request is made to '/'", async () => {
    const response = await request(server).get("/");
    expect(response.status).toEqual(200);
    expect(response.text).toEqual("Be a Coding Ninja.");
  });
  it("prints the correct message to the console", () => {
        const mockConsoleLog = jest.spyOn(console, "log");
        const port = 3100;
        startServer(port);
        expect(mockConsoleLog).toHaveBeenCalledWith(
          `server is listening at port: ${port}`
        );
        mockConsoleLog.mockRestore();
      });
});

// describe('Server Tests', () => {
//   test('GET / should return "Be a Coding Ninja."', async () => {
//     const response = await request(server).get('/');

//     expect(response.status).toBe(200);
//     expect(response.text).toBe('Be a Coding Ninja.');
//   });
// });
// jest.mock('express'); // Mock the express module

// describe('startServer', () => {
//   test('should start the server on the specified port', () => {
//     const port = 3000; // Replace with the desired port number

//     startServer(port);

//     expect(server.listen).toHaveBeenCalledWith(port);
//     expect(console.log).toHaveBeenCalledWith(`server is listening at port: ${port}`);
//   });
// });

// describe("startServer", () => {
//   it("prints the correct message to the console", () => {
//     const mockConsoleLog = jest.spyOn(console, "log");
//     const port = 3100;
//     startServer(port);
//     expect(mockConsoleLog).toHaveBeenCalledWith(
//       `server is listening at port: ${port}`
//     );
//     mockConsoleLog.mockRestore();
//   });
// });
