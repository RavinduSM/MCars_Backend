import express from "express";
import {
  addVehicle,
  deleteVehcle,
  getAllVehicles,
  getSpecificVehicle,
  updateVehicle,
} from "../controllers/vehicleController.js";
import { authenticate } from "../middleware/authMiddleware.js";

const vehicleRouter = express.Router();

vehicleRouter.post("/", authenticate, addVehicle);
vehicleRouter.get("/", getAllVehicles);
vehicleRouter.get("/:id", getSpecificVehicle);
vehicleRouter.put("/:id", updateVehicle);
vehicleRouter.delete("/:id", deleteVehcle);

export default vehicleRouter;
