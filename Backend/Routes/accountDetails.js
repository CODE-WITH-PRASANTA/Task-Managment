const express = require('express');
const router = express.Router();
const AccountDetails = require('../Model/AccountDetails');

// Get account details
router.get('/', async (req, res) => {
  try {
    const accountDetails = await AccountDetails.findOne();
    res.json(accountDetails);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch account details' });
  }
});

// Update or upload account details
router.post('/update', async (req, res) => {
  const { accountNumber, ifscCode, upiHandle } = req.body;

  if (!accountNumber || !ifscCode || !upiHandle) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    let accountDetails = await AccountDetails.findOne();
    if (accountDetails) {
      accountDetails.accountNumber = accountNumber;
      accountDetails.ifscCode = ifscCode;
      accountDetails.upiHandle = upiHandle;
      await accountDetails.save();
      res.json({ message: 'Account details updated successfully' });
    } else {
      accountDetails = new AccountDetails({ accountNumber, ifscCode, upiHandle });
      await accountDetails.save();
      res.json({ message: 'Account details uploaded successfully' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to update account details' });
  }
});

module.exports = router;
