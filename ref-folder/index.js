import express from "express";
import path from "path";
import ejs from "ejs";
const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));

app.get("/", (req, res) => {
  res.status(200).render("index");
});

export default app;
