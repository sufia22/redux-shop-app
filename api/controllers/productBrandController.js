import Brand from "../models/Brand.js";

// get all product brand
export const getAllProductBrand = async (req, res, next) => {
  try {
    const data = await Brand.find();
    res.status(200).json({
      brands: data,
      message: "get all brands successfully",
    });
  } catch (error) {
    next(error);
  }
};

// create product brand
export const createProductBrand = async (req, res, next) => {
  try {
    const { name, slug } = req.body;
    const data = await Brand.create({
      name,
      slug,
      photo: req.file.filename,
    });
    res.status(200).json({
      categbrandory: data,
      message: "Brand added successfully",
    });
  } catch (error) {
    next(createError("Data can not be saved", 400));
  }
};

// single product brand
export const getSingleBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Brand.findById(id);
    res.status(200).json({
      brand: data,
      message: "get single brand successfully",
    });
  } catch (error) {
    next(error);
  }
};

// delete product brand
export const deleteBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Brand.findByIdAndDelete(id);
    res.status(200).json({
      brand: data,
      message: " brand deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

// update product brand
export const updateBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, slug, photo } = req.body;
    const data = await Brand.findByIdAndUpdate(
      id,
      { name, slug, photo },
      { new: true }
    );
    res.status(200).json({
      brand: data,
      message: " brand updated successfully",
    });
  } catch (error) {
    next(error);
  }
};
