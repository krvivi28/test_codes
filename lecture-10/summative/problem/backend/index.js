import express from "express";
import empRoutes from "./routes/employee.route.js";
const app = express();
// Please don't change the pre-written code
// Import the necessary modules here
// Write your code here



app.use("/api/v1/emp", empRoutes);

app.listen(4000, () => {
  console.log("server is listening on port 4000");
});
