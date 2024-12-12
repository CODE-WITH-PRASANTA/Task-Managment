const express = require('express');
const router = express.Router();
const { signup, login, logout , getCustomers} = require('../Controller/authController');
const userController = require('../Controller/userController');
const { getWalletBalance ,getVipAccess  } = require('../Controller/authController');
const { authenticate } = require('../Middleware/authMiddleware');


// Define routes
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout); // New logout route
router.get('/customers', getCustomers);
router.put('/update-customer', userController.updateCustomer);
router.get('/wallet', authenticate, getWalletBalance);
router.get('/vip-access', authenticate, getVipAccess);



module.exports = router;
