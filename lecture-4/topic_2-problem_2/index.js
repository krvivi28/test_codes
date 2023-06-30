const express = require("express");
const server = express();

// Route for GET requests to '/'
server.get("/", (req, res) => {
  res.send("Be a Coding Ninja.");
});

module.exports = { server };
// This code snippet creates an instance of the Express application and defines a GET route handler to handle requests to the root path.
