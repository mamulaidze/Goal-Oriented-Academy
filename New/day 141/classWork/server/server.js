import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./db/connectDB.js";
import { Data } from "./models/data.model.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/classwork", async (req, res) => {
    try {
        const data = await Data.find({});
        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ message: "tf whats wrong " });
    }
});

app.post("/api/classwork", async (req, res) => {
    try {
        const data = await Data.create(req.body);
        res.status(201).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    try {
        await connectDB();
        console.log(`server is running on port http://localhost:${PORT}`);
    } catch (error) {
        console.log(error);
    }
});