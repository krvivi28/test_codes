import express from "express";
import albumRoutes from "./src/features/album/album.routes.js";
const app = express();

app.use("/api/albums", albumRoutes);

app.listen(5000, () => {
  console.log("server is listening at port 5000");
});
