import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import getHotelData from "./controllers/hotelProxyController.js";
import getMapData from "./controllers/mapProxyController.js";
import getWeatherData from "./controllers/weatherProxyController.js";
import locationRoutes from "./routes/locationRoutes.js";
import userRoutes from "./routes/userRoutes.js";

if (process.env.NODE_ENV === "test") {
  dotenv.config({ path: ".env.test" });
} else {
  dotenv.config();
}

const app = express();

app.use(cors());
app.use(express.json());

// Login and Registration
mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

// Favourite Locations Route
app.use("/api/:userId/locations", locationRoutes);
// User Route
app.use("/api/user", userRoutes);

// Weather Proxy Route
app.get("/api/weather/:location", async (req, res) => {
  const data = await getWeatherData(req.params.location);
  res.json(data);
});

// Map Proxy Route
app.get("/api/map/:lat/:lon", async (req, res) => {
  const data = await getMapData(req.params.lat, req.params.lon);
  res.json(data);
});

// Hotel Proxy Route
app.get("/api/hotels/:city", async (req, res) => {
  const data = await getHotelData(req.params.city);
  res.json(data);
});

// Server Connected
const server = app.listen(process.env.PORT, () =>
  console.log(
    `Server is running on: ${server.address().address}:${server.address().port}`
  )
);

export default server;
