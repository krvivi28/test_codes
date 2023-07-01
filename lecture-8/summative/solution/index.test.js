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
});
