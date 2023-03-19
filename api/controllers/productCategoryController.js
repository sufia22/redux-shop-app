import Category from "../models/Category.js";
import { createError } from "../utils/createError.js";

// get all product category
export const getAllProductCategory = async (req, res, next) => {
  try {
    const data = await Category.find();
    res.status(200).json({
      categories: data,
      message: "get all data successfully",
    });
  } catch (error) {
    next(createError("Category not found", 404));
  }
};

// create product category
export const createProductCategory = async (req, res, next) => {
  try {
    const { name, slug } = req.body;
    const data = await Category.create({
      name,
      slug,
      photo: req.file.filename,
    });
    res.status(200).json({
      category: data,
      message: "category added successfully",
    });
  } catch (error) {
    next(createError("Data can not be saved", 400));
  }
};

// single product category
export const getSingleProductCategory = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const data = await Category.findOne({ slug });
    res.status(200).json({
      category: data,
      message: "single category show successfully",
    });
  } catch (error) {
    next(error);
  }
};

// delete product category
export const deleteProductCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Category.findByIdAndDelete(id);
    res.status(200).json({
      message: " category delete successfully",
    });
  } catch (error) {
    next(error);
  }
};

// update product category
export const updateProductCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, slug } = req.body;
    const data = await Category.findByIdAndUpdate(
      id,
      { name, slug },
      { new: true }
    );
    res.status(200).json({
      category: data,
      message: " category updated successfully",
    });
  } catch (error) {
    next(error);
  }
};
