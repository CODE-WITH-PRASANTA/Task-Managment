const jwt = require('jsonwebtoken');
const User = require('../Model/User');

exports.authenticate = async (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Extract the token
  if (!token) return res.status(401).json({ message: 'No token provided.' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Decode the token
    req.user = await User.findById(decoded.id); // Find the user by ID

    if (!req.user) return res.status(401).json({ message: 'User not found.' }); // Check if user exists
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    res.status(401).json({ message: 'Invalid token.', error: error.message }); // Handle invalid token
  }
};

// Middleware for role-based access control
exports.requireAdmin = async (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Authentication required.' });
  }

  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied. Admins only.' });
  }

  next(); // Proceed if the user is an admin
};
