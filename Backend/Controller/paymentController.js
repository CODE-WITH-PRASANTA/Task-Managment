// controllers/paymentController.js
const Payment = require('../Model/Payment');

// Add Payment
exports.addPayment = async (req, res) => {
  try {
    const payment = new Payment(req.body);
    await payment.save();
    res.status(201).json({ success: true, message: 'Payment added successfully', payment });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error adding payment', error });
  }
};

// Get All Payments
exports.getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, payments });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching payments', error });
  }
};
