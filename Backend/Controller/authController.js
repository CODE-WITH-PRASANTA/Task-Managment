const User = require('../Model/User'); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

exports.signup = async (req, res) => {
  const { name, email, phoneNumber, password } = req.body;

  if (!email || !password || password.length < 8) {
    return res.status(400).json({ message: 'Invalid email or password must be at least 8 characters long.' });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ $or: [{ phoneNumber }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this phone number or email.' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, phoneNumber, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'User registered successfully.', user });
  } catch (error) {
    console.error('Error in signup:', error.message);
    res.status(500).json({ message: 'Signup failed.', error: error.message });
  }
};


// Login function
exports.login = async (req, res) => {
  const { phoneNumber, password } = req.body;

  if (!password || password.length !== 8) {
    return res.status(400).json({ message: 'Password must be exactly 8 characters long.' });
  }

  try {
    const user = await User.findOne({ phoneNumber });
    if (!user) return res.status(404).json({ message: 'User not found.' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials.' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ message: 'Login successful!', token });
  } catch (error) {
    res.status(500).json({ message: 'Error during login.', error: error.message });
  }
};


exports.logout = (req, res) => {
  const token = req.headers['authorization']?.split(' ')[1];
  // Add token to blacklist or inform client to remove
  res.json({ message: 'Logout successful. Token invalidated.' });
};


// Assuming you have a Customer model and API for this:
exports.getCustomers = async (req, res) => {
  try {
    const customers = await User.find(); // Or modify if it's a different model
    res.status(200).json(customers);
  } catch (error) {
    console.error('Error fetching customers:', error.message);
    res.status(500).json({ message: 'Error fetching customers.', error: error.message });
  }
};


exports.getWalletBalance = async (req, res) => {
  const { phoneNumber } = req.user; // Extract phoneNumber from the authenticated user
  try {
    const user = await User.findOne({ phoneNumber }, { wallet: 1 });
    if (!user) return res.status(404).json({ message: 'User not found.' });

    res.status(200).json({ wallet: user.wallet });
  } catch (error) {
    console.error('Error fetching wallet balance:', error.message);
    res.status(500).json({ message: 'Error fetching wallet balance.', error: error.message });
  }
};


exports.getVipAccess = async (req, res) => {
  const { phoneNumber } = req.user; // Assuming phoneNumber is part of the authenticated user
  try {
    const user = await User.findOne({ phoneNumber }, { vipAccess: 1 });
    if (!user) return res.status(404).json({ message: 'User not found.' });

    res.status(200).json({ vipAccess: user.vipAccess });
  } catch (error) {
    console.error('Error fetching VIP access:', error.message);
    res.status(500).json({ message: 'Error fetching VIP access.', error: error.message });
  }
};


