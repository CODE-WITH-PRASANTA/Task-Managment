const mongoose = require('mongoose');

const AccountDetailsSchema = new mongoose.Schema({
  accountNumber: {
    type: String,
    required: true,
  },
  ifscCode: {
    type: String,
    required: true,
  },
  upiHandle: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('AccountDetails', AccountDetailsSchema);
