import mongoose from 'mongoose';

const SongSchema = new mongoose.Schema({
  title: String,
  filePath: String,
});

export default mongoose.model('songs', SongSchema);
