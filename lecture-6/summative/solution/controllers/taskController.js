import TaskModel from "../models/taskModel.js";

export default class TaskController {
  index = (req, res) => {
    res.render("index", { tasks: TaskModel.getAllTasks() });
  };
  add = (req, res) => {
    res.render("add");
  };
  editById = (req, res) => {
    res.render("index");
  };
  deleteById = (req, res) => {
    res.render("index");
  };
  create = (req, res) => {
    const updatedTasks = TaskModel.createNewTask(req.body);
    res.render("index", { tasks: updatedTasks });
  };
}
