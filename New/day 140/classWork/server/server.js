import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { connectDB } from "./db/connectDB.js"; 
import {Data} from "./models/data.model.js"
dotenv.config()

const app = express()
app.use(cors())

app.get('/api/classwork', async (req,res)=>{
    try {
        const data = await Data.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message:{error}})
    }

})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on port http://localhost:${PORT}`)
})
  