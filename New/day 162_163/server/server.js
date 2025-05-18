import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import { connectDB } from './config/connectDB.js';

dotenv.config()
const app = express();
app.use(cors())
app.use(express.json())
app.use('/api/auth', authRoutes)
app.listen(process.env.PORT, () => {
    connectDB()
    console.log(`Server is running on port ${process.env.PORT}`);
})