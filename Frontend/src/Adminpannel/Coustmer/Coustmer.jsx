import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Coustmer.css';

// Import VIP Display Components
import VipDisplay1 from '../../Component/Vip1Dsiplay/Vip1display';
import VipDisplay2 from '../../Component/Vip2Display/Vip2Display';
import VipDisplay3 from '../../Component/Vip3Display/Vip3Display';
import VipDisplay4 from '../../Component/Vip4Display/Vip4Display';
import VipDisplay5 from '../../Component/Vip5Display/Vip5Display';
import VipDisplay6 from '../../Component/Vip6Display/Vip6Display';

const Customer = () => {
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeVipSection, setActiveVipSection] = useState(null); // State for active VIP section

  // Fetch customer data from the server
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/auth/customers');
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      } finally {
        setIsLoading(false); // Set loading to false when data is fetched
      }
    };

    fetchCustomers();
  }, []);

  // Save the updated wallet balance and VIP access to the backend
  const handleSubmit = async (customerId, updatedWallet, updatedVipAccess) => {
    try {
      await axios.put('http://localhost:5000/api/auth/update-customer', {
        phoneNumber: customerId, // Using customer ID as phone number
        wallet: updatedWallet, // Updated wallet balance
        vipAccess: updatedVipAccess, // Updated VIP access
      });
      alert('Customer updated successfully!');
      setCustomers((prevCustomers) =>
        prevCustomers.map((customer) =>
          customer.phoneNumber === customerId
            ? { ...customer, wallet: updatedWallet, vipAccess: updatedVipAccess }
            : customer
        )
      );
    } catch (error) {
      console.error('Error updating customer:', error);
      alert('Failed to update customer. Please try again.');
    }
  };

  // Handle VIP Section Rendering
  const renderVipSection = () => {
    switch (activeVipSection) {
      case 'vip1':
        return <VipDisplay1 />;
      case 'vip2':
        return <VipDisplay2 />;
      case 'vip3':
        return <VipDisplay3 />;
      case 'vip4':
        return <VipDisplay4 />;
      case 'vip5':
        return <VipDisplay5 />;
      case 'vip6':
        return <VipDisplay6 />;
      default:
        return null;
    }
  };

  if (isLoading) {
    return <div>Loading...</div>; // Show loading spinner or message
  }

  return (
    <div className="customer-container">
      <h2>Customer List</h2>
      <table className="customer-table">
        <thead>
          <tr>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Wallet Balance</th>
            <th>VIP Access</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer._id}>
              <td>{customer.phoneNumber}</td>
              <td>{customer.email}</td>
              <td>
                <input
                  type="number"
                  value={customer.wallet}
                  onChange={(e) => {
                    const updatedWallet = parseFloat(e.target.value);
                    setCustomers((prevCustomers) =>
                      prevCustomers.map((c) =>
                        c._id === customer._id ? { ...c, wallet: updatedWallet } : c
                      )
                    );
                  }}
                />
              </td>
              <td>
                <select
                  value={customer.vipAccess || []}
                  multiple
                  onChange={(e) => {
                    const updatedVipAccess = Array.from(
                      e.target.selectedOptions,
                      (option) => option.value
                    );
                    setCustomers((prevCustomers) =>
                      prevCustomers.map((c) =>
                        c._id === customer._id
                          ? { ...c, vipAccess: updatedVipAccess }
                          : c
                      )
                    );
                  }}
                >
                  <option value="vip1">VIP 1</option>
                  <option value="vip2">VIP 2</option>
                  <option value="vip3">VIP 3</option>
                  <option value="vip4">VIP 4</option>
                  <option value="vip5">VIP 5</option>
                  <option value="vip6">VIP 6</option>
                </select>
                {/* Add button to view VIP details */}
                <button
                  onClick={() => setActiveVipSection(customer.vipAccess[0])}
                  className="view-vip-btn"
                >
                  View VIP
                </button>
              </td>
              <td>
                <button
                  onClick={() =>
                    handleSubmit(
                      customer.phoneNumber,
                      customer.wallet,
                      customer.vipAccess
                    )
                  }
                  className="submit-btn"
                >
                  Submit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Render VIP Section */}
      <div className="vip-display">
        {renderVipSection()}
      </div>
    </div>
  );
};

export default Customer;
