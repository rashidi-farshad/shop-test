import mongoose from "mongoose";
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
  res.status(201).json({ message: "new user created" });
};

export const removeUser = async (req, res) => {
  let { id } = req.params;
  const existUser = mongoose.isValidObjectId(id);
  if (!existUser) {
    return res.status(400).send({ message: "Invalid user id" });
  }
  const user = await userModel.findByIdAndDelete(id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json({ message: "User deleted", user });
};
