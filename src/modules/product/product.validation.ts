import { z } from "zod";

const ProductValidation = z.object({
  category: z.string().trim(),
  title: z.string().trim(),
  description: z.string().trim(),
  image: z.string().url("Image must be a valid url"),
  price: z.number().nonnegative({ message: "Price can not be negetive" }),
  quantity: z.number().nonnegative({ message: "Price can not be negetive" }),
  rating: z
    .number()
    .nonnegative({ message: "Rating can not be negetive" })
    .lte(5, { message: "Rating can not be more then 5" }),
});

export { ProductValidation };
