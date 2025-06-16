import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes'
import cors from 'cors'
import connectDB from './config/db'
dotenv.config()
connectDB()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/auth',authRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});