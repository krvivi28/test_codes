const express = require("express");
const path = require("path");
const server = express();
const staticPath = path.join(__dirname, "public");

const renderStatic = (server, staticPath) => {
  server.use(express.static(staticPath));
};

server.get("/", (req, res) => {
  res.send("get method called!");
});

renderStatic(server, staticPath);

module.exports = { renderStatic, server };
