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
          <h1>Bajaj Money: Simplify Payments, Amplify Success!</h1>
          <div className="about-content">
            <p>
            We are Samar Khaira, an innovative CEO, Ravi Chandra, a dynamic strategist, and Vikash Madan, a skilled professional dedicated to providing rewarding opportunities for all. Together, we’ve built a platform where users can complete tasks and earn exciting rewards, ensuring every effort is worthwhile.
            </p>
            <p>
            Join us to explore a world where earning is simple, investment is rewarding, and trust is our foundation. Together, we’re redefining opportunities and helping you reach your goals seamlessly. Let’s create success, one task at a time!
            </p>
            <img src={teamImage} alt="Team working on project" className="about-image" />
          </div>
        </section>

        <section className="about-mission">
          <h2>What We Do</h2>
          <h3>Mission, Vision, And Values Of Bajaj Money</h3>
          <p><strong>Mission:</strong> To provide secure and rewarding opportunities for individuals to earn and invest confidently.</p>
          <p><strong>Vision:</strong> To empower users with simple, reliable ways to grow their wealth and achieve financial freedom.</p>
          <p><strong>Values:</strong> Guided by transparency, reliability, and security, we strive to create meaningful opportunities for all.</p>
        </section>

        <section className="about-stats">
          <div className="stat">
            <i className="fa fa-users"></i>
            <h4>Clients</h4>
            <p>1100+</p>
          </div>
          <div className="stat">
            <i className="fa fa-tasks"></i>
            <h4>Tasks</h4>
            <p>1200+</p>
          </div>
          <div className="stat">
            <i className="fa fa-users-cog"></i>
            <h4>Team Members</h4>
            <p>3</p>
          </div>
          <div className="stat">
            <i className="fa fa-phone-alt"></i>
            <h4>Hours of Support</h4>
            <p>24/7</p>
          </div>
        </section>
      </div>


      <div className="About-features-container">
      <h2>Why Businesses Trust Bajaj Money: A Leading Platform for Earning and Investment</h2>
      <p className="About-features-description">
      Due to our secure, dependable, and cost-effective solutions, businesses of all sizes trust us. Our platform allows users to effortlessly complete tasks, earn rewards, and invest securely. With a comprehensive set of features and integrations, we ensure a seamless experience for both online and offline transactions, empowering businesses to grow confidently.
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
          <p>We continuously innovate to provide secure, rewarding, and seamless opportunities for our users.</p>
        </div>
        <div className="About-feature-box">
          <FaMedal className="About-feature-icon" />
          <h3>Excellence</h3>
          <p>We strive to provide our customers with the best possible Task & Investment experience.</p>
        </div>
      </div>
    </div>

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

    
    </div>
  );
};

export default About;
