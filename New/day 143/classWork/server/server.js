import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js"
import { User } from "./models/users.model.js";
const app = express();
dotenv.config()
app.use(cors())
app.use(express.json())
app.get("/api/users", async (req,res)=> {
    try {
        const users = await User.find({})
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message:"sir there is big problem"})
    }
})

app.post("/api/users", async (req,res)=>{
    try {
        const body = req.body;
        const user = await User.create(body)
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on port http://localhost:${PORT}`);
})