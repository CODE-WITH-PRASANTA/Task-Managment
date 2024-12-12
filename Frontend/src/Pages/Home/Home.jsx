import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './Home.css';
import landingrightimg from '../../assets/landing-right.svg'; // Replace with your image path
import Howitworks from '../../Component/HowItWorks/Howitworks';
import AboutUsSection from '../../Component/AboutusSection/AboutUsSection';
import WebFacility from '../../Component/WebFacility/WebFacility';

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleNavigation = () => {
    navigate('/signin'); // Redirect to /signin page
  };

  return (
    <>
      <div className="home-container">
        <div className="fullHome-content">
          <div className="home-content">
            <h1>
              A reliable service for <span className="highlight">remote work</span>
            </h1>
            <p>Thousands of Tasks every day – Bajaj Financely has work for anyone</p>
            <div className="button-group">
              <button className="start-earning" onClick={handleNavigation}>
                Start earning Free
              </button>
              <button className="buyer" onClick={handleNavigation}>
                Buy Now
              </button>
            </div>
          </div>
          <div className="home-image">
            <img src={landingrightimg} alt="Illustration" />
          </div>
        </div>
      </div>
      <AboutUsSection />
      <Howitworks />
      <WebFacility />
      <div className="subscribe-section">
        <h2 className="subscribe-title">Ready to Get Started?</h2>
        <p className="subscribe-description">
          We take security very seriously at Bajaj Money. All of your customers’ payment information is encrypted
          and protected with the latest security technologies.
        </p>
        <div className="subscribe-input-container">
          <input
            type="email"
            className="subscribe-input"
            placeholder="Enter your email"
          />
          <button className="subscribe-button">Subscribe</button>
        </div>
      </div>
    </>
  );
};

export default Home;
