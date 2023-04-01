import express from "express";
import {
  createProductTag,
  deleteTag,
  getAllProductTag,
  singleProductTag,
  updateTag,
} from "../controllers/productTagController.js";

// create router
const router = express.Router();

// routes
router.route("/tag").get(getAllProductTag).post(createProductTag);
router.route("/tag/:slug").get(singleProductTag);
router.route("/tag/:id").delete(deleteTag).patch(updateTag);

// export
export default router;
