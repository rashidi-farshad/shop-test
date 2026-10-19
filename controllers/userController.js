import userModel from "../models/userModel.js";
import userSchema from "../validators/userValidator.js";

export const getUsers = async (req, res) => {
  const users = await userModel.find();
  res.send(users);
};

export const createUserSchema = async (req, res) => {
  const result = userSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).send({ error: result.error.issues });
  }

  const user = await userModel.create(result.data);
  res.status(201).send({ message: "new user created" }, user);
};
