import express from "express";
import {
  addProduct,
  getAllProducts,
  getOneProduct,
  rateProduct,
} from "../controller/product.controller.js";
import authorizer from "../../../middlewares/basicAuth.js";

const router = express.Router();

// get routes
router.route("/").get(authorizer, getAllProducts);
router.route("/:id").get(getOneProduct);

// post routes
router.route("/").post(addProduct);
router.route("/rateproduct").get(rateProduct);

export default router;
