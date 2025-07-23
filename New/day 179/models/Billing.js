import mongoose from 'mongoose';

const BillingInformation = new mongoose.Schema({
  company_user_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  company_name: { type: String, required: true },
  company_email_address: { type: String, required: true },
  vat_number: { type: String, required: true }
});

export default mongoose.model('BillingInformation', BillingInformation);
