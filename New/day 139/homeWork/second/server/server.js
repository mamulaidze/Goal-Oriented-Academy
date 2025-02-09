import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
import { Weather } from "./models/weather.js";

dotenv.config() 

const PORT = process.env.PORT || 8000;
const app = express();


app.use(cors());

app.get('/api/weather', async (req,res)=>{
    try {
        const weather = await Weather.find()
        res.status(200).json(weather)
    } catch (error) {
        res.status(500).json({message: 'server error'})
    }
})

app.listen(PORT,()=>{
    connectDB()
    console.log(`server is running on port http://localhost:${PORT}`)
})
