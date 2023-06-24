// Please don't change the pre-written code

export const validateBlog = (req, res) => {
  // Write your code here
  res.status(201).render("addBlog", { errors: null, success: true });
};
export const renderBlogForm = (req, res) => {
  res.render("addBlog", { errors: null, success: false });
};
