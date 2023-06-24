const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Response received at port 8080");
});
server.listen(8080);
console.log("server is listening at port 8080");

module.exports = server;

/*
In the code above, we use the createServer method of the http module to create a 
server instance. We pass a  requestListner callback function as an argument to the 
createServer method, which gets executed every time a request is made to the server.

The requestListner function simply sends a string message "Response received at port 
8080" back to the client using the response.end() method.

We then call the listen method on the server instance to start the server listening 
at port 8080.
*/
