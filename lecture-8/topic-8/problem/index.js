// Please don't change the pre-written code

const express = require("express");
const app = express();

// TODO: Implement the albumDB as a middleware in your Express app.
// TODO: Implement the POST /api/albums and GET /api/albums/:albumName endpoints using express Router in a separate routes file
// Remember to use Multer for handling file uploads in the POST /api/albums endpoint
// Use a controller for handling the album's functionality.

// This will hold the album data
let albumDB = {};

// Implement albumDB middleware here

app.listen(5000, () => {
  console.log("server is listening at port 5000");
});
