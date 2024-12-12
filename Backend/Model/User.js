// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  phoneNumber: { type: String, required: true, unique: true },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Regex for email validation
  },
  password: { type: String, required: true },
  wallet: { type: Number, default: 0 },
  vipAccess: [String],
});

module.exports = mongoose.model('User', UserSchema);
