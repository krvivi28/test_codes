const express = require("express");
const app = express();

const logRequest = () => {
  app.get("/", (req, res, next) => {
    console.log(req.method);
    console.log(req.path);
    next();
  });
};

logRequest();

app.get("/", (req, res) => {
  res.send("Coding Ninjas!");
});

module.exports = app;

// This code sets up an Express server that listens on port 5000. It defines a middleware function called `logRequest()` that logs the request method, path, and timestamp to the console for every incoming request to the root path ("/"). The middleware function is added to the application using `app.get()` and `next()` is called to pass the request to the next middleware function in the stack.

// After defining the middleware function, the code calls `logRequest()` to add it to the application. The code then defines a route handler for the root path that sends the response "Coding Ninjas!".

// Finally, the server is started using `app.listen()` and a message is logged to the console to indicate that the server is listening on port 5000.

// When a user makes a GET request to the root path "/", the middleware function `logRequest()` is called first, which logs the request details to the console. Then, the route handler sends the response "Coding Ninjas!" back to the client.
