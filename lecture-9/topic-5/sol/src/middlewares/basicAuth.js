// import basicAuth from "express-basic-auth";
import { getAllUsers } from "../features/user/model/user.model.js";

const basicAuthMiddleware = (req, res, next) => {
  const users = getAllUsers();
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    res
      .status(401)
      .json({ success: "false", message: "no authorization details found" });
  }

  const base64Credentials = authHeader.replace("Basic ", "");
  const decodedCreds = Buffer.from(base64Credentials, "base64").toString(
    "utf-8"
  );
  const credentials = decodedCreds.split(":");
  const validUser = users.find((user) => {
    if (user.email === credentials[0] && user.password === credentials[1])
      return user;
  });
  if (validUser) next();
  else
    res.status(401).json({ success: "false", message: "authorization failed" });
};

export default basicAuthMiddleware;
