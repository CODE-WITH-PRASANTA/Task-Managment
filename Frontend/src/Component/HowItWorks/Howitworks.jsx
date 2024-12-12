import React from "react";
import "./Howitworks.css";

// Importing assets
import signuplogo from "../../assets/RegisteredUsers.svg";
import completetasklogo from "../../assets/CompletedTasks.svg";
import getpaymentlogo from "../../assets/GetPaid.svg";

const Howitworks = () => {
  return (
    <div className="how-it-works-container">
        <div className="full-work-container">
      <h2 className="how-it-works-title">How it works</h2>
      <div className="steps-container">
        <div className="step-card card-1">
          <div className="step-card-inner">
            <div className="step-card-front">
              <img src={signuplogo} alt="Sign Up Icon" className="step-icon" />
              <h3 className="step-number">Step 1.</h3>
              <h4 className="step-title">Sign Up With Us</h4>
              <p className="step-description">     
                Sign up with your phone number, email, and password, and get a referral bonus when you use a friend's referral code!
              </p>
            </div>
            <div className="step-card-back">
              <h3 className="step-number">Add Money</h3>
              <p className="step-description">
              Add money to VIP account now and unlock exclusive rewards, premium features, increased earnings, priority support, instant access, unlimited benefits, and maximize your profits instantly!
              </p>
            </div>
          </div>
        </div>

        <div className="step-card card-2">
          <div className="step-card-inner">
            <div className="step-card-front">
              <img src={completetasklogo} alt="Complete Tasks Icon" className="step-icon" />
              <h3 className="step-number">Step 2.</h3>
              <h4 className="step-title">Complete Your Tasks</h4>
              <p className="step-description">     
                Complete tasks: watch YouTube video, like Facebook page, follow Instagram, watch video, rate on Google, refer friends & share posts to earn rewards!
              </p>
            </div>
            <div className="step-card-back">
              <h3 className="step-number">Get Tasks</h3>
              <p className="step-description">        
                Login to your VIP dashboard now and get instant access to exclusive tasks, rewards, benefits, bonuses, cash prizes and surprises to boost your earnings, profits and success instantly!
              </p>
            </div>
          </div>
        </div>

        <div className="step-card card-3">
          <div className="step-card-inner">
            <div className="step-card-front">
              <img src={getpaymentlogo} alt="Get Paid Icon" className="step-icon" />
              <h3 className="step-number">Step 3.</h3>
              <h4 className="step-title">Get Paid Quickly</h4>
              <p className="step-description">           
                Enter your account/Bank/UPI/Paytm details to withdraw earnings instantly and get paid quickly!
              </p>
            </div>
            <div className="step-card-back">
              <h3 className="step-number">Withdraw Money</h3>
              <p className="step-description">
              Withdraw your earnings instantly from your VIP account and get paid quickly via bank/Paytm/UPI transfer!
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className="start-earning-button">Start Earning Now</button>
      </div>
    </div>
  );
};

export default Howitworks;
