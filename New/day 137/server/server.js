import cors from "cors"
import express from "express"
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./connectDB.js";

connectDB()
dotenv.config()
const PORT = process.env.PORT
const app = express()

app.use(cors())
app.get("/", (req, res) => {
    res.send("API is running...");
});
  
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));