import express from "express";
import {
  createProductCategory,
  deleteProductCategory,
  getAllProductCategory,
  getSingleProductCategory,
  updateProductCategory,
} from "../controllers/productCategoryController.js";
import { productCategoryMulter } from "../utils/multer.js";

// create router
const router = express.Router();

// routes
router.get("/category", getAllProductCategory);
router.post("/category", productCategoryMulter, createProductCategory);
router.get("/category/:slug", getSingleProductCategory);
router.delete("/category/:id", deleteProductCategory);
router.patch("/category/:id", updateProductCategory);

// export
export default router;
