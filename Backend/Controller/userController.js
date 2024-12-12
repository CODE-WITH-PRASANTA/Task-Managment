const User = require('../Model/User');

// Update wallet and VIP access
exports.updateCustomer = async (req, res) => {
  const { phoneNumber, wallet, vipAccess } = req.body;

  if (wallet !== undefined && wallet < 0) {
    return res.status(400).json({ message: 'Invalid wallet balance.' });
  }

  try {
    // Find the user by phone number
    const user = await User.findOne({ phoneNumber });
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Update the wallet balance if provided
    if (wallet !== undefined) {
      user.wallet = wallet;
    }

    // Update VIP access if provided
    if (vipAccess !== undefined) {
      user.vipAccess = vipAccess; // Overwrite with the new array of VIPs
    }

    await user.save();

    res.status(200).json({ message: 'Customer updated successfully!', user });
  } catch (error) {
    console.error('Error updating customer:', error.message);
    res.status(500).json({ message: 'Error updating customer.', error: error.message });
  }
};
