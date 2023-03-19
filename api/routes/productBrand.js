import express from "express";
import {
  createProductBrand,
  deleteBrand,
  getAllProductBrand,
  getSingleBrand,
  updateBrand,
} from "../controllers/productBrandController.js";
import { productBrandMulter } from "../utils/multer.js";

// init router
const router = express.Router();

// routes
router.get("/brand", getAllProductBrand);
router.post("/brand", productBrandMulter, createProductBrand);
router.get("/brand/:id", getSingleBrand);
router.delete("/brand/:id", deleteBrand);
router.patch("/brand/:id", updateBrand);

// export
export default router;
