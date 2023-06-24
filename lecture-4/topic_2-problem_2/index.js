const express = require("express");
const server = express();
const port = 3000;

// Route for GET requests to '/'
server.get("/", (req, res) => {
  res.send("Be a Coding Ninja.");
});

// Function that takes a port number as a parameter and create an Express server.
const startServer = (port) => {
  server.listen(port);
  console.log(`server is listening at port: ${port}`);
};

module.exports = { server, startServer };
// This code snippet creates an instance of the Express application and defines a GET route handler to handle requests to the root path. It then defines a function called `startServer` that takes a port number as a parameter and logs a message to confirm that the server is running on that port. Finally, it calls the `startServer` function with the port number as an argument to start the server.
