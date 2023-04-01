import express from "express";
import {
  createProduct,
  getAllProducts,
} from "../controllers/productController.js";

// init router
const router = express.Router();

// routes
router.route("/").get(getAllProducts).post(createProduct);

// export
export default router;
