import express from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import TaskController from "./controllers/taskController.js";
const taskController = new TaskController();

const app = express();

app.use(expressEjsLayouts);
app.set("view engine", "ejs");
app.set("views", path.resolve("views"));
app.use(express.urlencoded({ extended: true }));

//GET Routes
app.get("/tasks", taskController.index);
app.get("/tasks/new", taskController.add);
app.get("/tasks/:id/edit", taskController.editById);
app.get("/tasks/:id/delete", taskController.deleteById);

//POST Routes
app.post("/task/new", taskController.create);

export default app;
