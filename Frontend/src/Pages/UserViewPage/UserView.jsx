import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserView.css';
import VipDisplay1 from '../../Component/Vip1Dsiplay/Vip1display';
import VipDisplay2 from '../../Component/Vip2Display/Vip2Display';
import VipDisplay3 from '../../Component/Vip3Display/Vip3Display';
import VipDisplay4 from '../../Component/Vip4Display/Vip4Display';
import VipDisplay5 from '../../Component/Vip5Display/Vip5Display';
import VipDisplay6 from '../../Component/Vip6Display/Vip6Display';
import menuicon from '../../assets/menu.png';
import WithdrawForm from '../../Component/WithDrawForm/WithdrawForm';
import PurchaseVip from '../../Pages/PurchaseVips/PurchaseVip';
import Referal from '../../Component/ReferalSecion/Referal';
import Invest from '../InvestmentPage/Invest';

const UserView = () => {
  const [activeSection, setActiveSection] = useState('Account');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [walletBalance, setWalletBalance] = useState(null);
  const [vipAccess, setVipAccess] = useState([]);

  useEffect(() => {
    const fetchWalletBalance = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/auth/wallet', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setWalletBalance(response.data.wallet);
      } catch (error) {
        console.error('Error fetching wallet balance:', error);
      }
    };

    if (activeSection === 'Account') fetchWalletBalance();
  }, [activeSection]);

  useEffect(() => {
    const fetchVipAccess = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/auth/vip-access', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setVipAccess(response.data.vipAccess);
      } catch (error) {
        console.error('Error fetching VIP access:', error);
      }
    };

    if (activeSection === 'Tasks') fetchVipAccess();
  }, [activeSection]);

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    document.cookie.split(';').forEach((cookie) => {
      const cookieName = cookie.split('=')[0].trim();
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });
    window.location.href = '/signin';
  };

  const renderVipDisplays = () => {
    return vipAccess.map((vip) => {
      switch (vip) {
        case 'vip1':
          return <VipDisplay1 key="vip1" />;
        case 'vip2':
          return <VipDisplay2 key="vip2" />;
        case 'vip3':
          return <VipDisplay3 key="vip3" />;
        case 'vip4':
          return <VipDisplay4 key="vip4" />;
        case 'vip5':
          return <VipDisplay5 key="vip5" />;
        case 'vip6':
          return <VipDisplay6 key="vip6" />;
        default:
          return null;
      }
    });
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'Account':
        return (
          <div>
            <div className="wallet-box">
              <h3>My Wallet</h3>
              <p>${walletBalance !== null ? walletBalance.toFixed(2) : 'Loading...'}</p>
              <WithdrawForm />
            </div>
          </div>
        );
      case 'Tasks':
        return <div className="vip-section">{renderVipDisplays()}</div>;
      case 'Purchase Vip':
        return <PurchaseVip />;
      case 'Refer and Earn':
        return <Referal />;
      case 'Investment': // Added "Investment" content placeholder
      return <Invest />;
      default:
        return <p>Select a section from the sidebar.</p>;
    }
  };

  return (
    <div className="user-view">
      <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <button
          className="sidebar-toggle"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <img
            src={menuicon}
            alt="Menu"
            className={isSidebarOpen ? 'rotate-icon' : 'rotate-icon-reversed'}
          />
        </button>
        {isSidebarOpen && (
          <div>
            {['Account', 'Purchase Vip', 'Tasks', 'Refer and Earn', 'Investment'].map((section) => ( // Added "Investment" to sidebar
              <div
                key={section}
                className={`sidebar-section ${activeSection === section ? 'active' : ''}`}
                onClick={() => setActiveSection(section)}
              >
                <h3>{section}</h3>
              </div>
            ))}
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
      <div className="content">{renderContent()}</div>
    </div>
  );
};

export default UserView;
