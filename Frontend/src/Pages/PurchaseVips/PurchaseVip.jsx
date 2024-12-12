import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PurchaseVip.css';

const PurchaseVip = () => {
  const navigate = useNavigate();

  // Handler for navigation
  const handleBuyNowClick = (plan) => {
    navigate('/payment', { state: { selectedPlan: plan } }); // Pass selected plan data as state
  };

  return (
    <>
      <div className="purchase-page">
        <h1>Choose the Best Plan to Start Earning Money</h1>
        <div className="purchase-toggle">
          <button>Vip Purchase</button>
          <button className="active">Premium (Save 20%)</button>
        </div>

        <div className="purchase-plans">
          <div className="all-purchase-section">
            {/* Plan 1 */}
            <div className="plan">
              <h2>Free</h2>
              <p className="price">₹0 per user/Onetime</p>
              <button className="buy-now" onClick={() => handleBuyNowClick('Free')}>Make a Free Trial Now</button>
              <ul>
                <li>Customizable layout options</li>
                <li>Responsive design by choice</li>
                <li>Fast loading speed optimization</li>
                <li>User-friendly content management system (CMS)</li>
                <li className="highlight">Hosting and domain included</li>
                <li className="highlight">Free maintenance and updates</li>
              </ul>
            </div>

            {/* Plan 2 */}
            <div className="plan">
              <h2>Vip-1</h2>
              <p className="price">₹399 per user/OneTime</p>
              <button className="buy-now" onClick={() => handleBuyNowClick('Vip-1')}>Buy now</button>
              <ul>
                <li>Business-specific templates</li>
                <li>Integration with Google Analytics</li>
                <li>Social media integration</li>
                <li>Support for team collaboration</li>
                <li className="highlight">Free domain hosting services</li>
              </ul>
            </div>

            <div className="plan">
            <h2>Vip-3</h2>
            <p className="price">₹499 per company/OneTime</p>
            <button className="buy-now" onClick={() => handleBuyNowClick('Vip-2')}>Buy now</button>
            <ul>
              <li>Corporate-grade templates designed for larger organizations</li>
              <li>Customer support portal</li>
              <li>High-capacity hosting and bandwidth</li>
              <li className="highlight">Free domain hosting services</li>
            </ul>
          </div>

          <div className="plan">
            <h2>Vip-4</h2>
            <p className="price">₹599 per user/Onetime</p>
            <button className="buy-now" onClick={() => handleBuyNowClick('Vip-3')}>Buy now</button>
            <ul>
              <li>Custom API integrations</li>
              <li>Secure API Connections</li>
              <li>Customizable Data Display</li>
              <li>Error Handling & Logging</li>
              <li className="highlight">Free domain hosting services</li>
            </ul>
          </div>

          <div className="plan">
            <h2>Vip-5</h2>
            <p className="price">₹699 per user/Onetime</p>
            <button className="buy-now" onClick={() => handleBuyNowClick('Vip-4')}>Buy now</button>
            <ul>
              <li>Integrated payment gateway</li>
              <li>Multiple Payment Methods</li>
              <li>Integration with Admin Panel</li>
              <li>Refunds & Cancellations</li>
              <li>Custom Branding for Checkout Pages</li>
              <li>Secure transactions</li>
              <li className="highlight">Free domain hosting services</li>
            </ul>
          </div>
          <div className="plan">
            <h2>Vip-6</h2>
            <p className="price">₹699 per user/Onetime</p>
            <button className="buy-now" onClick={() => handleBuyNowClick('Vip-5')}>Buy now</button>
            <ul>
              <li>Integrated payment gateway</li>
              <li>Multiple Payment Methods</li>
              <li>Integration with Admin Panel</li>
              <li>Refunds & Cancellations</li>
              <li>Custom Branding for Checkout Pages</li>
              <li>Secure transactions</li>
              <li className="highlight">Free domain hosting services</li>
            </ul>
          </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default PurchaseVip;
