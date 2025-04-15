import express from 'express';
import multer from 'multer';
import { Song } from '../models/Song.js';

const router = express.Router();
const upload = multer({
  dest: 'uploads/',
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith('audio/')) {
      return cb(new Error('Only audio files allowed!'), false);
    }
    cb(null, true);
  }
});

router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const { title } = req.body;
    const song = new Song({ title, filePath: req.file.path });
    await song.save();
    res.status(201).json({ message: 'Uploaded!', song });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;