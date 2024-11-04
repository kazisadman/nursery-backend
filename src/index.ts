import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./server";

import productRouter from "./modules/product/product.routes";
import userRouter from "./modules/user/user.routes";

const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(cors());
app.use(express.json());

connectDb();

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

app.use("/api/v1/product", productRouter);
app.use("/api/v1/user", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
