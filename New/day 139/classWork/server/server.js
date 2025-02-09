import dotenv from "dotenv"
import express from "express"
import {connectDB} from "./db/connectDB.js"
import { User } from "./models/user.model.js"
dotenv.config()

const app = express()

app.get("/api/users", async (req,res)=>{
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    connectDB()
    console.log(`Server is running on port http://localhost${PORT}`)
})