import app from "./index.js";
import request from "supertest";
const url = "./cn.png";

const headers = {
  "Content-Type": "multipart/form-data",
};

const payload = {
  text_field: "Hello, world!",
  file_field: open(url, "image"),
};
const response = requests.post(url, (headers = headers), (files = payload));

print(response.status_code);
print(response.text);
