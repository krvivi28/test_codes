import { logger } from "./logger.middleware.js";

export class customErrorHandler extends Error {
  constructor(statusCode, errMessage) {
    super(errMessage);
    this.statusCode = statusCode;
  }
}

export const errorHandlerMiddleware = (err, req, res, next) => {
  const error_to_log = `${new Date().toString()} req URL: ${
    req.originalUrl
  } error msg: ${err.message}`;
  logger.error(error_to_log);
  if (err instanceof customErrorHandler) {
    res.status(err.statusCode).send(err.message);
  } else {
    res.status(500).send("oops! something went wrong...Try again later!");
  }
};
