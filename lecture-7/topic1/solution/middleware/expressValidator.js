import { body, validationResult } from "express-validator";

export const formValidation = async (req, res, next) => {
  const rules = [
    body("name").notEmpty().withMessage("name is required"),
    body("email").isEmail().withMessage("enter valid email"),
    body("image").custom((value, { req }) => {
      if (!req.file) {
        throw new Error("profile image is required");
      } else return true;
    }),
  ];
  await Promise.all(
    rules.map((rule) => {
      return rule.run(req);
    })
  );
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.send(errors);
  } else {
    next();
  }
};
