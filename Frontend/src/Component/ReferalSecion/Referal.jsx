import React from 'react';
import './Referal.css';

// Assets for "How It Works"
import signinreferstep1 from '../../assets/login-refer-step-1.png';
import shareyourcodestep2 from '../../assets/share-your-code-step-2.png';
import shopvipstep3 from '../../assets/referee-shops-vip-step-3.png';
import getrewordstep4 from '../../assets/get-rewarded-step-4.png';

// Assets for "Steps to Refer and Get Rewarded"
import step1 from '../../assets/share-step-1.png';
import step2 from '../../assets/signup-step-2.png';
import step3 from '../../assets/purchase-step-3.png';
import step4 from '../../assets/getreward-step-4.png';


//asserts of the arrow add between the steps
import arrow from '../../assets/arrow-step.png'

const Referal = () => {
  return (
    <div className="referal-container">
      <h1 className="referal-heading">How It Works</h1>
      <p className="referal-description">
        Invite your friends and family to join and enjoy exclusive rewards for every successful referral!
      </p>

      {/* How It Works Section */}
      <div className="steps-container">
        <div className="step">
          <img src={signinreferstep1} alt="Login/Sign up" className="step-image" />
          <h2>1. Login/Sign up</h2>
          <p>
            Login/Sign up and get your unique code and referral link on the 'Refer and Earn' page.
          </p>
        </div>
        <div className="step">
          <img src={shareyourcodestep2} alt="Share Your Code" className="step-image" />
          <h2>2. Share Your Code</h2>
          <p>
            Refer a friend or family to our website using your referral code & Your Referral-Code is your phone number.
          </p>
        </div>
        <div className="step">
          <img src={shopvipstep3} alt="Referee Shops" className="step-image" />
          <h2>3. Referee Shops</h2>
          <p>
            Your referee will receive INR 350 in their Shoppre wallet upon signing up.
          </p>
        </div>
        <div className="step">
          <img src={getrewordstep4} alt="Get Rewarded" className="step-image" />
          <h2>4. Get Rewarded!</h2>
          <p>
            Once they make a purchase, you receive a Wallet Balance of INR 500!
          </p>
        </div>
      </div>

      <button className="cta-button">Start Referring Now</button>

      <div className="reward-steps">
  <div className="reward-step">
    <img src={step1} alt="Share" className="reward-step-icon" />
    <h3>Share</h3>
  </div>
  <img src={arrow} alt="Arrow" className="reward-arrow" />
  <div className="reward-step">
    <img src={step2} alt="Sign Up" className="reward-step-icon" />
    <h3>Sign Up</h3>
  </div>
  <img src={arrow} alt="Arrow" className="reward-arrow" />
  <div className="reward-step">
    <img src={step3} alt="Purchase" className="reward-step-icon" />
    <h3>Purchase</h3>
  </div>
  <img src={arrow} alt="Arrow" className="reward-arrow" />
  <div className="reward-step">
    <img src={step4} alt="Get Rewarded" className="reward-step-icon" />
    <h3>Get Rewarded</h3>
  </div>
</div>

    </div>
  );
};

export default Referal;
