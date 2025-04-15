import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import uploadRoutes from './routes/upload.js';
import { connectDB } from './db/connectDB.js';
const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads/audio', express.static('uploads/audio'));

// Routes
app.use('/api', uploadRoutes);

// Start server
app.listen(4000, () => {
    connectDB()
  console.log('🚀 Server running at http://localhost:4000');
});
