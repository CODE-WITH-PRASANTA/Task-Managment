import React from 'react';
import './AboutUsPage.css';
import teamImage from '../../assets/team.jpg'; // Replace with the actual image path
import { FaUserCheck, FaLock, FaLightbulb, FaMedal } from 'react-icons/fa'; // Example icons

const About = () => {
  return (
    <div className='about-full'>
      {/* Hero Section */}
      <section className="about-banner-bg">
        <div className="container">
          <div className="heading-div">
            <h1>About Us</h1>
          </div>
        </div>
      </section>

      <div className="about-page">
        <section className="about-intro">
          <h2>About Us</h2>
          <h1>Payprime: Simplify Payments, Amplify Success!</h1>
          <div className="about-content">
            <p>
              With a variety of payment options for both B2B and B2C companies, Payprime is the top provider of payment gateway services in India. We offer a dependable, safe, and easy-to-use platform for accepting payments from clients worldwide.
            </p>
            <p>
              We also provide a range of tools, such as real-time reporting, fraud protection, and dispute resolution. Our team is available 24/7 to assist with any issues, ensuring the best possible payment experience for our clients.
            </p>
            <img src={teamImage} alt="Team working on project" className="about-image" />
          </div>
        </section>

        <section className="about-mission">
          <h2>What We Do</h2>
          <h3>Mission, Vision, And Values Of Payprime</h3>
          <p><strong>Mission:</strong> To provide the best possible payment solutions in India, making online and offline payments easy, secure, and affordable.</p>
          <p><strong>Vision:</strong> To be the most trusted and reliable payment gateway service provider, empowering businesses and individuals to pay with ease and confidence.</p>
          <p><strong>Values:</strong> Our values guide our actions and are the foundation of our success.</p>
        </section>

        <section className="about-stats">
          <div className="stat">
            <i className="fa fa-users"></i>
            <h4>Clients</h4>
            <p>1100+</p>
          </div>
          <div className="stat">
            <i className="fa fa-tasks"></i>
            <h4>Projects</h4>
            <p>1200+</p>
          </div>
          <div className="stat">
            <i className="fa fa-users-cog"></i>
            <h4>Team Members</h4>
            <p>50+</p>
          </div>
          <div className="stat">
            <i className="fa fa-phone-alt"></i>
            <h4>Hours of Support</h4>
            <p>24/7</p>
          </div>
        </section>
      </div>


      <div className="About-features-container">
      <h2>Why Businesses Trust Payprime, A Leading Payment Gateway Provider</h2>
      <p className="About-features-description">
        Because of its safe, dependable, and reasonably priced payment processing solutions,
        businesses of all sizes rely on Payprime, a top provider of payment gateways in India.
        Businesses may easily take payments from both domestic and foreign consumers online and offline
        with Payprime’s extensive About-feature set and integrations.
      </p>
      <button className="get-started-btn">Get Started</button>

      <div className="About-features-list">
        <div className="About-feature-box">
          <FaUserCheck className="About-feature-icon" />
          <h3>Customer Focus</h3>
          <p>We are committed to providing our customers with the best possible service and support.</p>
        </div>
        <div className="About-feature-box">
          <FaLock className="About-feature-icon" />
          <h3>100% Secured</h3>
          <p>We are committed to protecting our customers’ data and transactions.</p>
        </div>
        <div className="About-feature-box">
          <FaLightbulb className="About-feature-icon" />
          <h3>Innovation</h3>
          <p>We are constantly innovating to develop new and innovative payment solutions that meet our customers'needs.</p>
        </div>
        <div className="About-feature-box">
          <FaMedal className="About-feature-icon" />
          <h3>Excellence</h3>
          <p>We strive to provide our customers with the best possible payment experience.</p>
        </div>
      </div>
    </div>

    <div className="subscribe-section">
      <h2 className="subscribe-title">Ready to Get Started?</h2>
      <p className="subscribe-description">
        We take security very seriously at Indicpay. All of your customers’ payment information is encrypted
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

    
    </div>
  );
};

export default About;
