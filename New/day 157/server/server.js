import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import uploadRoutes from './routes/upload.js';
import { connectDB } from './db/connectDB.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// __dirname ალტერნატივა ESM-ში
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(cors());
app.use(express.json());

// Static files for audio
app.use('/uploads/audio', express.static(path.join(__dirname, '../uploads/audio')));

// Routes
app.use('/api', uploadRoutes);

// Start server
app.listen(4000, () => {
  connectDB();
  console.log('🚀 Server running at http://localhost:4000');
});
