import express from "express";
import { productController } from "./product.controller";

const router = express.Router();

router.post("/", productController.createProduct);
router.get("/", productController.getAllProducts);
router.get("/:_id", productController.getProductById);
router.delete("/:_id", productController.deleteProduct);
router.patch("/:_id", productController.updateProduct);

export default router;
