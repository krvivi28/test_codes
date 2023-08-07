import express from "express";
import userRoutes from "./src/features/user/routes/user.routes.js";
import { invalidRoutesHandlerMiddleware } from "./src/middlewares/invalidRoutes.middleware.js";
import {
  customErrorHandler,
  errorHandlerMiddleware,
} from "./src/middlewares/errorHandler.js";

const app = express();

app.use(express.json());

app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  throw new customErrorHandler(
    404,
    "testing app level error handling middleware"
  );
});

// Middleware to handle invalid routes
app.use(invalidRoutesHandlerMiddleware);

// Middleware to handle application errors
app.use(errorHandlerMiddleware);

export default app;
