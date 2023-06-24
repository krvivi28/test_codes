import express from "express";
import { deleteUser, renderUsers } from "./user.controller.js";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "views");
app.get("/", renderUsers);
app.get("/delete/:id",deleteUser);

export default app;
