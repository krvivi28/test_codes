// Please don't change the pre-written code
// Import the necessary modules here

import { user } from "./user.model.js";

export const renderUpdateForm = (req, res) => {
  res.render("update-form", { user });
};

// Write your code here
