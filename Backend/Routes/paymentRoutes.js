// routes/paymentRoutes.js
const express = require('express');
const router = express.Router();
const { addPayment, getAllPayments } = require('../Controller/paymentController');

router.post('/add', addPayment);
router.get('/all', getAllPayments);

module.exports = router;
