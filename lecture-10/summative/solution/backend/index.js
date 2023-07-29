import express from "express";
import empRoutes from "./routes/employee.route.js";
import cors from "cors";
const app = express();

app.use(cors());

app.use("/api/v1/emp", empRoutes);

app.listen(4000, () => {
  console.log("server is listening on port 4000");
});
