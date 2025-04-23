import express from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import Song from '../models/Song.js';
import { fileURLToPath } from 'url';

const router = express.Router();

// dirname იმპორტისთვის
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Upload song
router.post('/upload', upload.single('audio'), async (req, res) => {
  const newSong = new Song({
    title: req.file.originalname,
    filePath: `uploads/${req.file.filename}`,
  });
  await newSong.save();
  res.json(newSong);
});

// Get songs
router.get('/songs', async (req, res) => {
  const songs = await Song.find();
  res.json(songs);
});

// Delete song
router.delete('/songs/:id', async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) return res.status(404).json({ message: 'Not found' });

    const filePath = path.join(__dirname, '../../', song.filePath);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

    await Song.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting' });
  }
});

export default router;
