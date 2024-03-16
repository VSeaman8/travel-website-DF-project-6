import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import userRoutes from "./Routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

app.use("/api/User", userRoutes);

export default app;
