import { TProduct } from "./product.interface";
import Product from "./product.model";

const createProduct = async (payload: TProduct) => {
  const data = await Product.create(payload);
  return data;
};

export const productService = { createProduct };
