import http from "http";
import fs from "fs";
const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk.toString();
    });
    req.on("end", () => {
      fs.appendFileSync("data.txt", data);
      console.log(fs.readFileSync("data.txt", "utf-8"));
    });
    res.end("data received");
  }
});

export default server;

// This code snippet creates a Node.js server using the built-in http module that listens on port 3000. When a POST request is made to this server, the server reads the request body data in chunks using events, appends the data to a file named data.txt using the built-in fs module, and then prints the contents of the data.txt file to the console using console.log(). Finally, the server sends a response back to the client with the message "data received".
