import express from "express";
const router = express.Router();
import * as userController from "../controllers/userController.js";

router.get("/", userController.getUsers);
router.post("/", userController.createUserSchema);

export default router;
