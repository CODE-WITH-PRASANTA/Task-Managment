import React, { useEffect, useState } from 'react';
import config from '../../config';  // Import the config file
import './PaymentRequset.css';

const PaymentRequest = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch(`${config.baseUrl}api/withdraw`);
        const data = await response.json();
        setRequests(data);
      } catch (error) {
        console.error('Error fetching withdraw requests:', error);
      }
    };

    fetchRequests();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${config.baseUrl}api/withdraw/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        console.error('Failed to delete request:', response.status, response.statusText);
        return;
      }
      setRequests(requests.filter((request) => request._id !== id));
    } catch (error) {
      console.error('Error deleting withdraw request:', error);
    }
  };

  return (
    <div className="withdraw-requests">
      <h2 className="withdraw-title">Withdraw Requests</h2>
      <table className="withdraw-table">
        <thead>
          <tr>
            <th>Phone Number</th>
            <th>Amount</th>
            <th>Method</th>
            <th>Details</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request._id}>
              <td>{request.phoneNumber}</td>
              <td>₹{request.amount}</td>
              <td>{request.method}</td>
              <td>{request.details}</td>
              <td>{request.status}</td>
              <td>
                <button
                  onClick={() => handleDelete(request._id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentRequest;
