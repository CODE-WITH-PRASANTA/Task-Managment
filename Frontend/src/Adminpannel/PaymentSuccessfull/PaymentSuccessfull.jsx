import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PaymentSuccessfull.css';

const PaymentSuccessfull = () => {
  const [paymentData, setPaymentData] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/payments/all');
        setPaymentData(response.data.payments);
      } catch (error) {
        console.error('Error fetching payments:', error);
      }
    };

    fetchPayments();
  }, []);

  return (
    <div className="payment-success-container">
      <h2 className="payment-title">Payment Success Details</h2>
      <table className="payment-table">
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>UTR Number</th>
            <th>Amount</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Payment Method</th>
            <th>Referral Code</th>
          </tr>
        </thead>
        <tbody>
          {paymentData.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td> {/* Serial Number */}
              <td>{data.utrNumber}</td>
              <td>₹{data.amount}</td>
              <td>{data.name}</td>
              <td>{data.phoneNumber}</td>
              <td>{data.email}</td>
              <td>{data.method}</td>
              <td>{data.referralCode || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentSuccessfull;
