import express, { Router } from "express";
import {
  logoutCurrentUser,
  signin,
  signup,
} from "../controllers/authController.js";

const UserRouter = Router();

UserRouter.post("/signup", signup);
UserRouter.post("/signin", signin);
UserRouter.post("/logout", logoutCurrentUser);

export default UserRouter;
