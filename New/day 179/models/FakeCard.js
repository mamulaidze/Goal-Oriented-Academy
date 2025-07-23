import mongoose from 'mongoose';

const FakeCard = new mongoose.Schema({
  serial_number: { type: String, required: true },
  cardholder_name: { type: String, required: true },
  card_number: { type: String, required: true },
  expiration_date: { type: String, required: true },
  cvv: { type: String, required: true },
  salary: { type: String, required: true },
  paypal: { type: String, required: true }
});

export default mongoose.model('aq unda iyos "cards"? ra davarqvat collections', FakeCard);
