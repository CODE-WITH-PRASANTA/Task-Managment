const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  phoneNumber: { type: String, required: true, unique: true },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Regex for email validation
  },
  password: { type: String, required: true },
  wallet: { type: Number, default: 0 },
});

module.exports = mongoose.model('Customer', CustomerSchema);
