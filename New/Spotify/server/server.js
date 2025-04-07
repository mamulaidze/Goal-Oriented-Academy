import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { connectDB } from "./db/connectDB.js"
import {apiRoutes} from "./routes/api.routes.js";
import {authRoutes} from "./routes/auth.js";


dotenv.config()
const PORT = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(express.json())
app.use("/auth",authRoutes)
app.use("/api", apiRoutes)
app.listen(PORT,()=>{
    connectDB()
    console.log(`server is running on port http://localhost:${PORT}`)
})