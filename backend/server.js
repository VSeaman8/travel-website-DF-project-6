import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import userRoutes from "./Routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

app.use("/api/User", userRoutes);

const server = app.listen(process.env.PORT, () =>
  console.log(
    `Server is running on: ${server.address().address}:${server.address().port}`
  )
);

export default server;
