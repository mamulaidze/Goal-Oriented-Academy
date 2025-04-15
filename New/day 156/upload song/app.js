import { connectDB } from "./db/connectDB.js";
import express from "express"
import songRoutes from "./routes/songs.js";
import dotenv from "dotenv";
dotenv.config()
const app = express();


app.use(express.json()); 
app.use('/api/songs', songRoutes)


connectDB();

export default app  