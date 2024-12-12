const mongoose = require('mongoose');

const WithdrawSchema = new mongoose.Schema({
  phoneNumber: { type: String, required: true },
  amount: { type: Number, required: true },
  method: { type: String, enum: ['banking', 'upi'], required: true },
  details: { type: String, required: true }, // Banking or UPI details
  status: { type: String, enum: ['Pending', 'Approved', 'Processing'], default: 'Pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Withdraw', WithdrawSchema);
