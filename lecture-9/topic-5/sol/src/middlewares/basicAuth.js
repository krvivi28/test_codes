import basicAuth from "express-basic-auth";
import { getAllUsers } from "../features/user/model/user.model.js";

const basicAuthMiddleware = (email, password) => {
  const users = getAllUsers();
  const user = users.find((user) => {
    return basicAuth.safeCompare(email, user.email);
  });
  if (user) {
    return basicAuth.safeCompare(password, user.password);
  } else {
    console.log("invalid credentials");
  }
};

const authorizer = basicAuth({
  authorizer: basicAuthMiddleware,
  challenge: true,
});

export default authorizer;
