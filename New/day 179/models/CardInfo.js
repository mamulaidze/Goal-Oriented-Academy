import mongoose from 'mongoose';

const UserCardInformationSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  fake_card_id: { type: mongoose.Schema.Types.ObjectId, required: true }
});

export default mongoose.model('CardInformation', UserCardInformationSchema);
