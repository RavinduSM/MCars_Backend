import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import UserRouter from "./routes/authRoutes.js";
import vehicleRouter from "./routes/vehicleRoutes.js";
import uploadRouter from "./routes/uploadRoutes.js";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());
app.use(cookieParser());

// Enable cors at the server side.

const corsOption = {
  origin: ['http://localhost:3000'],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};
app.use(cors(corsOption));

app.use("/api/auth", UserRouter);
app.use("/api/vehicles", vehicleRouter);
app.use("/api/uploads", uploadRouter);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname + "/uploads")));

const port = process.env.port;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
