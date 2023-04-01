import Tag from "../models/Tag.js";

// get all product tag
export const getAllProductTag = async (req, res, next) => {
  try {
    const tags = await Tag.find();
    res.status(200).json({
      tags,
      message: "Get all tags successfully",
    });
  } catch (error) {
    next(error);
  }
};

// create product tag
export const createProductTag = async (req, res, next) => {
  try {
    const { name, slug } = req.body;
    const tag = await Tag.create({
      name,
      slug,
    });
    res.status(200).json({
      tag,
      message: "Tag created successfully",
    });
  } catch (error) {
    next(error);
  }
};

// single product tag
export const singleProductTag = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const tag = await Tag.findOne({ slug });
    res.status(200).json({
      tag,
      message: "single tag show successfully",
    });
  } catch (error) {
    next(error);
  }
};

// delete product tag
export const deleteTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    const tag = await Tag.findByIdAndDelete(id);
    res.status(200).json({
      tag,
      message: "tag deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

// update product tag
export const updateTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, slug } = req.body;
    const tag = await Tag.findByIdAndUpdate(id, { name, slug }, { new: true });
    res.status(200).json({
      tag,
      message: "tag update successfully",
    });
  } catch (error) {
    next(error);
  }
};
