import express from "express";
import path from "path";
import ejs from "ejs";
import { renderBlogForm } from "./src/controllers/blog.controller.js";
import expressEjsLayouts from "express-ejs-layouts";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));
app.use(expressEjsLayouts);

app.get("/createblog", renderBlogForm);

export default app;
