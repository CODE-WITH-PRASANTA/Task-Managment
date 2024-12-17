import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config'; // Import the config file
import './AccountForm.css';

const AccountForm = () => {
  const [formData, setFormData] = useState({
    accountNumber: '',
    ifscCode: '',
    upiHandle: '',
  });

  // Fetch account details when the component mounts
  useEffect(() => {
    const fetchAccountDetails = async () => {
      try {
        const response = await axios.get(`${config.baseUrl}api/account-details/`);
        if (response.data) {
          setFormData(response.data);
        }
      } catch (error) {
        console.error('Error fetching account details:', error);
      }
    };
    fetchAccountDetails();
  }, []);

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${config.baseUrl}api/account-details/update`,
        formData
      );
      alert(response.data.message);
    } catch (error) {
      console.error('Error updating account details:', error);
      alert('Failed to update account details');
    }
  };

  return (
    <div className="account-form-container">
      <h2>Update Virtual Account Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Account Number</label>
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            placeholder="Enter Account Number"
          />
        </div>
        <div className="form-group">
          <label>IFSC Code</label>
          <input
            type="text"
            name="ifscCode"
            value={formData.ifscCode}
            onChange={handleChange}
            placeholder="Enter IFSC Code"
          />
        </div>
        <div className="form-group">
          <label>UPI Handle</label>
          <input
            type="text"
            name="upiHandle"
            value={formData.upiHandle}
            onChange={handleChange}
            placeholder="Enter UPI Handle"
          />
        </div>
        <button type="submit" className="submit-button">
          Save Details
        </button>
      </form>
    </div>
  );
};

export default AccountForm;
