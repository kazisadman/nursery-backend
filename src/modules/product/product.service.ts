import { TProduct, TUpdateProductPayload } from "./product.interface";
import Product from "./product.model";

const createProduct = async (payload: TProduct) => {
  const data = await Product.create(payload);
  return data;
};

const getAllProducts = async (queryTerm: string) => {
  if (queryTerm) {
    const data = await Product.aggregate([
      {
        $search: {
          index:"product_search",
          text: {
            query: queryTerm,
            path: ["title", "description","category"],
          },
        },
      },
    ]);
    return data;
  } else {
    const data = await Product.find();
    return data;
  }
};

const getProductById = async (payload: string) => {
  const data = await Product.findById(payload);
  return data;
};

const deleteProduct = async (payload: string) => {
  const data = await Product.findByIdAndDelete(payload);
  return data;
};

const updateProduct = async ({ _id, data }: TUpdateProductPayload) => {
  const result = await Product.findByIdAndUpdate(_id, data, { new: true });
  return result;
};

export const productService = {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
  updateProduct,
};
