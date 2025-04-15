import express from 'express';
import multer from 'multer';
import Song from '../models/Song.js';
import fs from 'fs';

const router = express.Router();


const audioDir = 'uploads/audio';
if (!fs.existsSync(audioDir)) {
  fs.mkdirSync(audioDir, { recursive: true });
}


const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, audioDir),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });


router.post('/upload', upload.single('audio'), async (req, res) => {
  const song = new Song({
    title: req.body.title || req.file.originalname,
    filePath: req.file.path,
  });
  await song.save();
  res.json({ message: 'Uploaded!', song });
});


router.get('/songs', async (req, res) => {
  const songs = await Song.find().sort({ createdAt: -1 });
  res.json(songs);
});

export default router;
