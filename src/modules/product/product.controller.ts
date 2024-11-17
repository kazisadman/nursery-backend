import asyncHandler from "../../utils/asyncHandler";
import responseHandler from "../../utils/responseHandler";
import { productService } from "./product.service";
import { ProductValidation } from "./product.validation";

const createProduct = asyncHandler(async (req, res) => {
  const validateData = ProductValidation.parse(req.body);

  const result = await productService.createProduct(validateData);
  res
    .status(200)
    .json(
      new responseHandler(200, true, result, "Product Created Successfully")
    );
});

const getAllProducts = asyncHandler(async (req, res) => {
  const { query } = req.query;

  const result = await productService.getAllProducts(query as string || "");
  res
    .status(200)
    .json(
      new responseHandler(200, true, result, "Products Fetched Successfully")
    );
});

const getProductById = asyncHandler(async (req, res) => {
  const { _id } = req.params;
  const result = await productService.getProductById(_id);
  res
    .status(200)
    .json(
      new responseHandler(200, true, result, "Product Fetched Successfully")
    );
});

const deleteProduct = asyncHandler(async (req, res) => {
  const { _id } = req.params;
  const result = await productService.deleteProduct(_id);
  res
    .status(200)
    .json(
      new responseHandler(200, true, result, "Product Deleted Successfully")
    );
});

const updateProduct = asyncHandler(async (req, res) => {
  const { _id } = req.params;

  const validateData = ProductValidation.partial().parse(req.body);

  const payload = {
    _id,
    data: validateData,
  };

  const result = await productService.updateProduct(payload);

  res
    .status(200)
    .json(
      new responseHandler(200, true, result, "Product Updated Successfully")
    );
});

export const productController = {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
  updateProduct,
};
