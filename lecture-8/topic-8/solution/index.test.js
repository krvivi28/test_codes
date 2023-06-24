const request = require("supertest");
const express = require("express");
const path = require("path");
const albumRoutes = require("./src/features/album/album.routes");
const fs = require("fs");

describe("Album Routes", () => {
  let app;

  beforeAll(() => {
    app = express();
    app.use(express.json());

    let albumDB = {};
    app.use((req, res, next) => {
      req.albumDB = albumDB;
      next();
    });

    app.use("/api/albums", albumRoutes);
  });

  it("should upload files and create an album", async () => {
    const response = await request(app)
      .post("/api/albums")
      .attach(
        "photos",
        fs.readFileSync(path.join(__dirname, "./test_image.png")),
        "test_image.png"
      )
      .field("album", "testAlbum");

    expect(response.status).toBe(201);
  });

  it("should retrieve images associated with an album", async () => {
    const response = await request(app).get("/api/albums/testAlbum");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(["testAlbum-test_image.png"]);
  });

  it("should return 404 for non-existent album", async () => {
    const response = await request(app).get("/api/albums/nonExistentAlbum");

    expect(response.status).toBe(404);
    expect(response.text).toMatch(/Album not found/i);
  });
});
