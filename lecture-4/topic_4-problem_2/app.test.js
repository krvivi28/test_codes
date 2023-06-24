const request = require("supertest");
const server = require(".");

describe("Testing GET, POST, PUT, and DELETE requests", () => {
  it("GET('/') should respond with the text messages 'get'", async () => {
    const getres = await request(server).get("/");
    expect(getres.status).toBe(200);
    expect(getres.text).toBe("get");
  });
  it("POST('/') should respond with the text messages 'post'", async () => {
    const postres = await request(server).post("/");
    expect(postres.status).toBe(200);
    expect(postres.text).toBe("post");
  });
  it("PUT('/') should respond with the text messages 'put'", async () => {
    const putres = await request(server).put("/");
    expect(putres.status).toBe(200);
    expect(putres.text).toBe("put");
  });
  it("DELETE('/') should respond with the text messages 'delete'", async () => {
    const delres = await request(server).delete("/");
    expect(delres.status).toBe(200);
    expect(delres.text).toBe("delete");
  });
});
