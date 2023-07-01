import { userModel } from "../models/users.model.js";

export const userController = (req, res) => {
  const userData = userModel();
  res.render("index", { users: userData });
};
