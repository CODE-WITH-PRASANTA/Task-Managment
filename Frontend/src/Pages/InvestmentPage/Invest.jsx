import React from 'react';
import './Invest.css';
import { useNavigate } from 'react-router-dom';

const Invest = () => {
  const navigate = useNavigate();

  const handleBuyNowClick = (plan) => {
    navigate('/payment', { state: { selectedPlan: plan } }); // Pass selected plan data as state
  };

  return (
    <div className="purchase-page">
      <h1>Choose the Best Investment Plan to Start Earning Money</h1>
      <div className="purchase-toggle">
        <button className="active">Investment Plans</button>
      </div>

      <div className="purchase-plans">
        <div className="all-purchase-section">
          {/* Investment Plan 1 */}
          <div className="plan">
            <h2>Invest ₹500</h2>
            <p className="price">₹500 One-Time Investment</p>
            <button className="buy-now" onClick={() => handleBuyNowClick('Invest ₹500')}>Invest Now</button>
            <ul>
              <li>Daily returns of ₹50 for 30 days</li>
              <li>Profit at the end of 30 days: ₹1500</li>
              <li>Complete transparency in earnings</li>
              <li>Easy withdrawal options</li>
              <li className="highlight">Secure and risk-free</li>
            </ul>
          </div>

          {/* Investment Plan 2 */}
          <div className="plan">
            <h2>Invest ₹1000</h2>
            <p className="price">₹1000 One-Time Investment</p>
            <button className="buy-now" onClick={() => handleBuyNowClick('Invest ₹1000')}>Invest Now</button>
            <ul>
              <li>Daily returns of ₹100 for 30 days</li>
              <li>Profit at the end of 30 days: ₹3000</li>
              <li>Easy withdrawal options</li>
              <li>Long-term investment option</li>
              <li className="highlight">Guaranteed returns</li>
            </ul>
          </div>

          {/* Investment Plan 3 */}
          <div className="plan">
            <h2>Invest ₹2000</h2>
            <p className="price">₹2000 One-Time Investment</p>
            <button className="buy-now" onClick={() => handleBuyNowClick('Invest ₹2000')}>Invest Now</button>
            <ul>
              <li>Daily returns of ₹200 for 30 days</li>
              <li>Profit at the end of 30 days: ₹6000</li>
              <li>Exclusive premium benefits</li>
              <li>Priority customer support</li>
              <li className="highlight">Higher profit potential</li>
            </ul>
          </div>

          {/* Investment Plan 4 */}
          <div className="plan">
            <h2>Invest ₹5000</h2>
            <p className="price">₹5000 One-Time Investment</p>
            <button className="buy-now" onClick={() => handleBuyNowClick('Invest ₹5000')}>Invest Now</button>
            <ul>
              <li>Daily returns of ₹500 for 30 days</li>
              <li>Profit at the end of 30 days: ₹15,000</li>
              <li>Early payout options</li>
              <li>Exclusive high-earning plan</li>
              <li className="highlight">Secure high returns</li>
            </ul>
          </div>

          {/* Investment Plan 5 */}
          <div className="plan">
            <h2>Invest ₹10000</h2>
            <p className="price">₹10,000 One-Time Investment</p>
            <button className="buy-now" onClick={() => handleBuyNowClick('Invest ₹10000')}>Invest Now</button>
            <ul>
              <li>Daily returns of ₹1000 for 30 days</li>
              <li>Profit at the end of 30 days: ₹30,000</li>
              <li>Exclusive partnership benefits</li>
              <li>Highest return rate</li>
              <li className="highlight">Maximum profit and growth</li>
            </ul>
          </div>
          <div className="plan">
            <h2>Invest ₹20000</h2>
            <p className="price">₹20,000 One-Time Investment</p>
            <button className="buy-now" onClick={() => handleBuyNowClick('Invest ₹10000')}>Invest Now</button>
            <ul>
              <li>Daily returns of ₹2000 for 30 days</li>
              <li>Profit at the end of 30 days: ₹60,000</li>
              <li>Exclusive partnership benefits</li>
              <li>Highest return rate</li>
              <li className="highlight">Maximum profit and growth</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invest;
