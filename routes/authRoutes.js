import express, { Router } from "express";
import {
  getCurrentUserProfile,
  logoutCurrentUser,
  signin,
  signup,
  updateCurrentUserProfile,
} from "../controllers/authController.js";

// middleware
import { authenticate } from "../middleware/authMiddleware.js";

const UserRouter = Router();

UserRouter.post("/signup", signup);
UserRouter.post("/signin", signin);
UserRouter.post("/logout", logoutCurrentUser);

UserRouter.route("/profile")
  .get(authenticate, getCurrentUserProfile)
  .put(authenticate, updateCurrentUserProfile);

export default UserRouter;
