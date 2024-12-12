// models/Payment.js
const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  utrNumber: { type: String, required: true },
  amount: { type: Number, required: true },
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  method: { type: String, required: true },
  referralCode: { type: String, default: null },
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);
