import winston from "winston";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [new winston.transports.File({ filename: "combined.log" })],
});
export const loggerMiddleware = (req, res, next) => {
  const data_to_log = `${new Date().toString()}\n req URL: ${
    req.originalUrl
  }\n reqBody: ${JSON.stringify(req.body)}`;
  logger.info(data_to_log);
  next();
};
export default loggerMiddleware;
