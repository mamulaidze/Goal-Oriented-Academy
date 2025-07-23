import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  userId: String,
  image: String,
  name: String,
  type: [String],
  about: String,
  companyId: mongoose.Schema.Types.ObjectId,
  status: {
    type: String,
    enum: ['worcking', 'cancled', 'done'],
  },
  compleation: Number,

  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
});

export default mongoose.model('Project', projectSchema);
