import { delUser, users } from "./user.model.js";

export const renderUsers = (req, res) => {
  res.render("users", { users });
};
export const deleteUser = (req, res) => {
  const id = Number(req.params.id);
  const updatedUser = delUser(id);
  res.render("users", { users: updatedUser });
};
