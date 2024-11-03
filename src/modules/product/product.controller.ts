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
      new responseHandler(200, true, result, "Product Creted Successfully")
    );
});

export const productController = { createProduct };
