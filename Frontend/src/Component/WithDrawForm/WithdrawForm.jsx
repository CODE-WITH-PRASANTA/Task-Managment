import React, { useState } from 'react';
import './WithdrawForm.css';
import config from '../../config'; // Import config.js

const WithdrawForm = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [details, setDetails] = useState('');
  const [transactions, setTransactions] = useState([]);

  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.value);
    setDetails('');
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleBankingDetailsChange = () => {
    const name = document.getElementById('banking-name').value;
    const accountNumber = document.getElementById('account-number').value;
    const ifscCode = document.getElementById('ifsc-code').value;
    setDetails(`Account No: ${accountNumber}, IFSC: ${ifscCode}, Name: ${name}`);
  };

  const handleUPIDetailsChange = () => {
    const name = document.getElementById('name').value;
    const upiId = document.getElementById('upi-id').value;
    setDetails(`UPI ID: ${upiId}, Name: ${name}`);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const withdrawData = {
      phoneNumber,
      amount,
      method: selectedMethod,
      details,
      status: 'Pending',
      dateTime: new Date().toLocaleString(),
    };

    try {
      const response = await fetch(`${config.baseUrl}api/withdraw`, { // Use the base URL from config.js
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(withdrawData),
      });

      if (response.ok) {
        alert('Withdraw request submitted successfully!');
        setTransactions([...transactions, { ...withdrawData, status: 'Submitted' }]);

        // Store phone number in localStorage for later use in PaymentRequest
        localStorage.setItem('userPhoneNumber', phoneNumber);

        setPhoneNumber('');
        setAmount('');
        setSelectedMethod('');
        setDetails('');
      } else {
        const errorData = await response.json();
        alert(`Failed to submit request: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error submitting withdraw request:', error);
      alert('An error occurred while submitting the request.');
    }
  };

  return (
    <div className="withdraw-container">
      {/* Left Section: Withdraw Money */}
      <div className="withdraw-section">
        <h2>Withdraw Money</h2>
        <form onSubmit={handleSubmit}>
          <div className="withdraw-form-group">
            <label htmlFor="phone-number">Phone Number</label>
            <input
              type="text"
              id="phone-number"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </div>

          <div className="withdraw-form-group">
            <label htmlFor="withdraw-amount">Amount</label>
            <input
              type="number"
              id="withdraw-amount"
              placeholder="Enter amount to withdraw"
              value={amount}
              onChange={handleAmountChange}
            />
          </div>

          <div className="withdraw-form-group">
            <label>Withdraw Method</label>
            <div className="radio-group">
              <div>
                <input
                  type="radio"
                  id="banking"
                  name="method"
                  value="banking"
                  onChange={handleMethodChange}
                />
                <label htmlFor="banking">Banking</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="upi"
                  name="method"
                  value="upi"
                  onChange={handleMethodChange}
                />
                <label htmlFor="upi">UPI</label>
              </div>
            </div>
          </div>

          {selectedMethod === 'banking' && (
            <div className="banking-form">
              <h3>Banking Details</h3>
              <div className="withdraw-form-group">
                <label htmlFor="banking-name">Name</label>
                <input type="text" id="banking-name" placeholder="Enter your name" />
              </div>
              <div className="withdraw-form-group">
                <label htmlFor="account-number">Account Number</label>
                <input type="text" id="account-number" placeholder="Enter account number" />
              </div>
              <div className="withdraw-form-group">
                <label htmlFor="ifsc-code">IFSC Code</label>
                <input type="text" id="ifsc-code" placeholder="Enter IFSC code" />
              </div>
              <button
                type="button"
                className="save-button"
                onClick={handleBankingDetailsChange}
              >
                Save Banking Details
              </button>
            </div>
          )}

          {selectedMethod === 'upi' && (
            <div className="upi-form">
              <h3>UPI Details</h3>
              <div className="withdraw-form-group">
                <label htmlFor="upi-id">UPI ID</label>
                <input type="text" id="upi-id" placeholder="Enter UPI ID" />
              </div>
              <div className="withdraw-form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter your name" />
              </div>
              <button
                type="button"
                className="save-button"
                onClick={handleUPIDetailsChange}
              >
                Save UPI Details
              </button>
            </div>
          )}

          <button type="submit" className="withdraw-button">
            Submit Request
          </button>
        </form>
      </div>

      {/* Right Section: Transaction History */}
      <div className="history-section">
        <h2>Transaction History</h2>
        <table>
          <thead>
            <tr>
              <th>Phone Number</th>
              <th>Amount</th>
              <th>Method</th>
              <th>Status</th>
              <th>Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td data-label="Phone Number">{transaction.phoneNumber}</td>
                <td data-label="Amount">{transaction.amount}</td>
                <td data-label="Method">{transaction.method}</td>
                <td data-label="Status">{transaction.status}</td>
                <td data-label="Date & Time">{transaction.dateTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WithdrawForm;
