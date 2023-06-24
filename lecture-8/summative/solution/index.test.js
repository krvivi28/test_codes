import request from "supertest";
import app from "./index.js";

describe("Art Piece API", () => {
  let createdArtPieceId;

  // Test case for creating a new art piece
  it("should create a new art piece", async () => {
    const response = await request(app).post("/api/artPieces").send({
      title: "Mona Lisa",
      artist: "Leonardo da Vinci",
      year: 1503,
      imageUrl: "https://example.com/monalisa.jpg",
    });
    expect(response.body).toHaveProperty("id");
    createdArtPieceId = response.body.id;
  });

  // Test case for retrieving all art pieces
  it("should retrieve all art pieces", async () => {
    const response = await request(app).get("/api/artPieces");
    expect(response.body).toHaveLength(1); // Assuming only one art piece is created
  });

  // Test case for retrieving a specific art piece
  it("should retrieve a specific art piece by ID", async () => {
    const response = await request(app).get(
      `/api/artPieces/${createdArtPieceId}`
    );
    expect(response.body).toHaveProperty("id", createdArtPieceId);
  });

  // Test case for updating an art piece
  it("should update an art piece", async () => {
    const response = await request(app)
      .put(`/api/artPieces/${createdArtPieceId}`)
      .send({
        title: "Updated Title",
      });
    expect(response.body).toHaveProperty("id", createdArtPieceId);
    expect(response.body).toHaveProperty("title", "Updated Title");
  });

  // Test case for deleting an art piece
  it("should delete an art piece", async () => {
    const response = await request(app).delete(
      `/api/artPieces/${createdArtPieceId}`
    );
  });

  // Test case for retrieving a deleted art piece
  it("should not retrieve a deleted art piece", async () => {
    const response = await request(app).get(
      `/api/artPieces/${createdArtPieceId}`
    );
    expect(response.text).toMatch(/Art piece not found/i);
  });
});
