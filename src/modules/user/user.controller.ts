import asyncHandler from "../../utils/asyncHandler";
import responseHandler from "../../utils/responseHandler";
import { userService } from "./user.service";
import { userValidator } from "./user.validator";

const createUser = asyncHandler(async(req, res) => {
  const validatedData = userValidator.parse(req.body);

  const result = await userService.createUser(validatedData);

  res
    .status(200)
    .json(new responseHandler(200, true, result, "User created successfully"));
});

export const userController = { createUser };
