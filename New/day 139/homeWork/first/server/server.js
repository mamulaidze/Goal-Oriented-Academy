import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { connectDB } from "./db/connectDB.js"
import { Word } from "./models/word.model.js"

const app = express()
dotenv.config()
app.use(cors())
// app.use(express.json())
const PORT = process.env.PORT || 5000
app.get("/api/words", async (req , res)=>{
    try {
        const words = await Word.find()
        res.status(200).json(words)
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"})
    }
})
app.listen(PORT, ()=>{
    connectDB()
    console.log(`Server is running on port http://localhost:${PORT}`)
})