const express = require('express');
const { addWithdrawRequest, getAllWithdrawRequests , deleteWithdrawRequest } = require('../Controller/withdrawController');

const router = express.Router();

// Route to add a new withdraw request
router.post('/withdraw', addWithdrawRequest);

// Route to get all withdraw requests
router.get('/withdraw', getAllWithdrawRequests);
router.delete('/withdraw/:id', deleteWithdrawRequest);

module.exports = router;
