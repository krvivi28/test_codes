import fs from "fs";
const fsPromise = fs.promises;
export const log = async (log_data) => {
  try {
    await fsPromise.appendFile("log.txt", log_data);
  } catch (error) {
    console.log(err);
  }
};

export const loggerMiddleware = async (req, res, next) => {
  const data_to_log = `${new Date().toString()}\n req URL: ${
    req.originalUrl
  }\n reqBody: ${JSON.stringify(req.body)} \n\n`;
  await log(data_to_log);
  next();
};
export default loggerMiddleware;
