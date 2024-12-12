const Withdraw = require('../Model/WithdrawRequest');

// Add a new withdraw request
exports.addWithdrawRequest = async (req, res) => {
  try {
    const { phoneNumber, amount, method, details } = req.body;

    if (!phoneNumber || !amount || !method || !details) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newRequest = new Withdraw({
      phoneNumber,
      amount,
      method,
      details
    });

    await newRequest.save();
    res.status(201).json({ message: 'Withdraw request added successfully', newRequest });
  } catch (error) {
    res.status(500).json({ message: 'Error creating withdraw request', error });
  }
};

// Get all withdraw requests
exports.getAllWithdrawRequests = async (req, res) => {
  try {
    const requests = await Withdraw.find().sort({ createdAt: -1 });
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching withdraw requests', error });
  }
};

exports.deleteWithdrawRequest = async (req, res) => {
    const { id } = req.params;
    try {
      const deletedRequest = await Withdraw.findByIdAndDelete(id); // Use correct model
      if (!deletedRequest) {
        return res.status(404).json({ message: 'Request not found' });
      }
      res.status(200).json({ message: 'Request deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete request', error });
    }
};