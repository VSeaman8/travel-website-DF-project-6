import dotenv from "dotenv";
import express from "express";
import userRoutes from "./Routes/userRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/User", userRoutes);

export default app;

/*
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

const loginRouter = require("./Routes/login.js");
app.use("/login", loginRouter);

app.listen(3000, () => console.log("Server Started"));*/
