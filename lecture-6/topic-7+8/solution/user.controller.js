import { updateUsers, users } from "./user.model.js";

export const renderUpdateForm = (req, res) => {
  res.render("update-form", { user: users[0] });
};

export const updateUser = (req, res) => {
  updateUsers(req.body);
  res.status(201).render("update-form", { user: req.body });
};
