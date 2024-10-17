import express from "express";
import cors from "cors";

import "dotenv/config";
import connectDB from "./config/mongoDB.js";
import connectCloudinary from "./config/cloudinary.js";

import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";

// App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors());

// Api Endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

// Listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));
