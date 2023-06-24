// Please don't change the pre-written code
// Import the necessary modules here

import express from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));
app.use(expressEjsLayouts);

// Write your code here

export default app;
