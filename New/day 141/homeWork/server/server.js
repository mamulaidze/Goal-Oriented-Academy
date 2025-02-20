import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { connectDB } from "./db/connectDB.js"
import { Data } from "./models/data.model.js"
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

app.get("/api/homework", async(req,res)=>{
    try {
        const data = await Data.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message:error})
    }
})

app.post('/api/homework', async (req, res) => {
    try {
      const body = req.body
      const user = await Data.create(body)
      res.status(201).json(user)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  })





const PORT = process.env.PORT || 9000

app.listen(PORT,()=>{
    connectDB()
    console.log(`Server is running on port http://localhost:${PORT}`)
})