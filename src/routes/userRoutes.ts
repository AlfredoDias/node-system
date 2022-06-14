import { Router } from "express";
import { userController } from "../controllers/user/userController";

const usersController = new userController();
const userRoutes = Router();

userRoutes.post("/", usersController.handle);

export { userRoutes };