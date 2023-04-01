import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";
import productCategoryRoute from "./routes/productCategory.js";
import productBrandRoute from "./routes/productBrand.js";
import productTagRoute from "./routes/productTag.js";
import productRoute from "./routes/product.js";
import mongoDBConnect from "./config/db.js";
import { errorHandle } from "./middlewares/errorHandler.js";

// init express
const app = express();
dotenv.config();

// environment variables
const PORT = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// static folder
app.use(express.static("api/public"));

// routes
app.use("/api/v1/product", productCategoryRoute);
app.use("/api/v1/product", productBrandRoute);
app.use("/api/v1/product", productTagRoute);
app.use("/api/v1/product", productRoute);

// use error handler
app.use(errorHandle);

// listen server
app.listen(PORT, () => {
  mongoDBConnect();
  console.log(`Server is running on port ${PORT}`.bgGreen.black);
});
