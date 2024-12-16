import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MakePayment.css';
import qrcode from '../../assets/QR-CODE.jpg';

const MakePayment = () => {
  const [formData, setFormData] = useState({
    utrNumber: '',
    amount: '',
    name: '',
    phoneNumber: '',
    email: '',
    method: '',
    referralCode: '',
  });

  const [accountDetails, setAccountDetails] = useState({
    accountName: 'Easebuzz',
    accountNumber: '',
    ifscCode: '',
    upiHandle: '',
  });

  // Fetch account details from the backend
  useEffect(() => {
    const fetchAccountDetails = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/account-details');
        if (response.data) {
          setAccountDetails({
            accountName: response.data.accountName || 'Easebuzz',
            accountNumber: response.data.accountNumber,
            ifscCode: response.data.ifscCode,
            upiHandle: response.data.upiHandle,
          });
        }
      } catch (error) {
        console.error('Error fetching account details:', error);
      }
    };

    fetchAccountDetails();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/payments/add', formData);
      alert(response.data.message);
      setFormData({
        utrNumber: '',
        amount: '',
        name: '',
        phoneNumber: '',
        email: '',
        method: '',
        referralCode: '',
      });
    } catch (error) {
      console.error('Error submitting payment:', error);
      alert('Error submitting payment');
    }
  };

  const copyUPIHandle = () => {
    navigator.clipboard.writeText(accountDetails.upiHandle);
    alert('UPI Handle copied to clipboard!');
  };

  const downloadQRCode = () => {
    const link = document.createElement('a');
    link.href = qrcode;
    link.download = 'QR-CODE.jpg';
    link.click();
  };

  const sendWhatsAppMessage = () => {
    const message = "I have completed a payment, here's the screenshot.";
    const phoneNumber = "919xxxxxxxxx"; // Replace with your WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="payment-container">
      <div className="main-container">
        <div className="account-details">
          <h3>Virtual Account Details</h3>
          <p className="info">
            Account Name: <span>{accountDetails.accountName}</span>
          </p>
          <p className="info">
            A/c Number / IFSC: <span>{`${accountDetails.accountNumber} / ${accountDetails.ifscCode}`}</span>
          </p>
          <p className="info">
            UPI Handle: <span>{accountDetails.upiHandle}</span>
            <button className="copy-button" onClick={copyUPIHandle}>
              Copy
            </button>
          </p>
          <div className="qr-section">
            <img src={qrcode} alt="QR Code" className="qr-code" />
          </div>
          <button className="download-button" onClick={downloadQRCode}>
            Download QR Code
          </button>
        </div>

        <div className="form-section">
          <h3>Payment Details Form</h3>
          <form onSubmit={handleSubmit}>
            <div className="payment-form-group">
              <label>Enter UTR Number</label>
              <input
                type="text"
                name="utrNumber"
                value={formData.utrNumber}
                onChange={handleChange}
                placeholder="Enter UTR Number"
              />
            </div>
            <div className="payment-form-group">
              <label>Amount</label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Enter Amount"
              />
            </div>
            <div className="payment-form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>
            <div className="payment-form-group">
              <label>Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>
            <div className="payment-form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
            <div className="payment-form-group">
              <label>Method of Payment</label>
              <select
                name="method"
                value={formData.method}
                onChange={handleChange}
              >
                <option value="">Select a method</option>
                <option value="phonepay">PhonePe</option>
                <option value="gpay">GPay</option>
                <option value="paytm">Paytm</option>
              </select>
            </div>
            <div className="payment-form-group">
              <label>Referral Code (Optional)</label>
              <input
                type="text"
                name="referralCode"
                value={formData.referralCode}
                onChange={handleChange}
                placeholder="Enter Referral Code"
              />
            </div>
            <div className="payment-form-group">
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="whatsapp-notice">
          <p className="warning-text">
            <strong>Warning:</strong> Please send your payment screenshot to us on WhatsApp for verification.
          </p>
          <button className="whatsapp-button" onClick={sendWhatsAppMessage}>
            Send on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default MakePayment;
