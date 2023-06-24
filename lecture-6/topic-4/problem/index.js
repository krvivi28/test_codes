import express from "express";
import { newUser } from "./user.controller.js";

const app = express();
app.use(express.json());
app.post("/new", newUser);

export default app;
