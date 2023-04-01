import { createSlug } from "../helper/slugCreate.js";
import Product from "../models/Product.js";

// get all products
export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      products,
      message: "Get all products successfully",
    });
  } catch (error) {
    next(error);
  }
};

// create product
export const createProduct = async (req, res, next) => {
  try {
    const { name } = req.body;
    console.log(createSlug(name));
  } catch (error) {
    next(error);
  }
};
