import mongoose from 'mongoose';

const InvoiceSchema = new mongoose.Schema({
  invoice_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  pending: { type: Boolean, default: true },
  updateAt: { type: Date, default: Date.now }
});

export default mongoose.model('Invoice', InvoiceSchema);
