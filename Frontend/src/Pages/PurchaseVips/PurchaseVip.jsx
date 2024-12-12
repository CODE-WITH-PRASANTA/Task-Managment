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
    <div className="plan">
      <h2>Free</h2>
      <p className="price">₹0 per user/Onetime</p>
      <button className="buy-now">Start Free Trial</button>
      <ul>
        <li>Sign up and earn daily rewards</li>
        <li>Complete tasks like watching videos and giving reviews</li>
        <li>Earn through referrals</li>
        <li>Join now and start earning from day one!</li>
        <li className="highlight">Limited daily rewards</li>
      </ul>
      {/* <p className="earning-opportunity">Invest your time by completing simple tasks and get rewarded daily. Earn by referring others and completing surveys or watching videos!</p> */}
    </div>

    <div className="plan">
      <h2>Vip-1</h2>
      <p className="price">₹299 per user/Onetime</p>
      <button className="buy-now">Buy now</button>
      <ul>
        <li>Invest in tasks and get daily profits</li>
        <li>Earn by referring friends</li>
        <li>Complete tasks like watching videos, reviewing services, and more</li>
        <li>Access to exclusive tasks for higher rewards</li>
        <li className="highlight">Free rewards for every task completed</li>
      </ul>
      {/* <p className="earning-opportunity">Start investing now and complete tasks like watching promotional videos, giving reviews, and referring friends. The more you engage, the higher your earnings!</p> */}
    </div>

    <div className="plan">
      <h2>Vip-2</h2>
      <p className="price">₹499 per company/OneTime</p>
      <button className="buy-now">Buy now</button>
      <ul>
        <li>Earn by completing simple daily tasks</li>
        <li>Refer others to earn additional rewards</li>
        <li>Watch videos, participate in surveys, and more</li>
        <li>Unlock higher rewards with a one-time investment</li>
        <li className="highlight">Earn daily profit with your investment</li>
      </ul>
      {/* <p className="earning-opportunity">Invest to unlock exclusive tasks, daily rewards, and more. Get started today and earn as you complete simple actions like watching videos and referring others!</p> */}
    </div>

    <div className="plan">
      <h2>Vip-3</h2>
      <p className="price">₹599 per user/Onetime</p>
      <button className="buy-now">Buy now</button>
      <ul>
        <li>Access to premium tasks for high rewards</li>
        <li>Complete tasks and earn daily</li>
        <li>Earn through referrals and tasks completion</li>
        <li>Exclusive rewards and bonuses for active users</li>
        <li className="highlight">Daily profit for every task completed</li>
      </ul>
      {/* <p className="earning-opportunity">With this plan, start earning by completing video watching, surveys, and referrals. The more you do, the more you earn! Get rewarded daily.</p> */}
    </div>

    <div className="plan">
      <h2>Vip-4</h2>
      <p className="price">₹699 per user/Onetime</p>
      <button className="buy-now">Buy now</button>
      <ul>
        <li>Multiple ways to earn daily rewards</li>
        <li>Referral program for additional earnings</li>
        <li>Complete tasks like watching videos and giving reviews</li>
        <li>Exclusive rewards for top performers</li>
        <li className="highlight">Earn money for completing simple tasks</li>
      </ul>
      {/* <p className="earning-opportunity">Maximize your earnings with this plan! Complete more tasks, refer more people, and enjoy higher daily rewards!</p> */}
    </div>

    <div className="plan">
      <h2>Vip-5</h2>
      <p className="price">₹999 per user/Onetime</p>
      <button className="buy-now">Buy now</button>
      <ul>
        <li>Highest earning potential with premium tasks</li>
        <li>Earn rewards by completing videos, surveys, and referrals</li>
        <li>Exclusive tasks for top-tier users</li>
        <li>Complete tasks for higher daily profits</li>
        <li className="highlight">Special bonuses for active users</li>
      </ul>
      
    </div>
  </div>
</div>
      </div>
    </>
  );
};

export default PurchaseVip;
