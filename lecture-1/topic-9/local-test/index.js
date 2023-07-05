const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const stringOfHTML = fs.readFileSync("index.html").toString();
  res.end(stringOfHTML);
});

server.listen(8080, () => {
  console.log("server is listening at port 8080");
});
module.exports = server;
/*
This code creates a Node.js server that serves an HTML file named index.html 
in response to incoming HTTP requests on port 8080. It uses the built-in http
module to create the server and the fs module to read the HTML file. The file 
contents are sent back to the client as the response body using the 
response.end() method.
*/
