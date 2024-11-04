import { z } from "zod";

const userValidator = z.object({
  name: z.string().trim(),
  email:z.string().email({message:"Invalid email address"}),
  phoneNumber: z
    .string()
    .max(11, { message: "Phone number cannot exceed 11 digits" }),
  address: z.string().trim(),
});

export { userValidator };
