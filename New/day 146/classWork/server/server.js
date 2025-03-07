import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./db/connectDB.js";
import { Data } from "./models/data.model.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    try {
        await connectDB();
        console.log(`server is running on port http://localhost:${PORT}`);
    } catch (error) {
        console.log(error);
    }
});