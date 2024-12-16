import React from 'react';
import FacebookIcon from '../../assets/facebook-logo-3d.png';
import InstagramIcon from '../../assets/instagram-logo-3d.png';
import WhatsappIcon from '../../assets/whatsapp-logo-3d.png';
import Character3d from '../../assets/footer-character-logo.webp';
import CopyrightC from '../../assets/copy-right-style-C.svg';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="social-media">
          <span>Join us on social networks</span>
          <div className="icons">
            <img src={FacebookIcon} alt="Facebook" />
            <img src={InstagramIcon} alt="Instagram" />
            <img src={WhatsappIcon} alt="Whatsapp" />
          </div>
        </div>
        <div className="character">
          <img src={Character3d} alt="Character" />
        </div>
        <div className="download-app">
          <span>Download our mobile app</span>
          <div className="app-icons">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
          </div>
        </div>
      </div>
      <div className="footer-middle">
        <div className="footer-links">
          <div className="column">
            <h4>Task System</h4>
            <ul>
              <li>Post a Task</li>
              <li>Track Task Progress</li>
              <li>Guarantee System</li>
              <li>Trending Tasks</li>
              <li>Freelancer Matching</li>
            </ul>
          </div>
          <div className="column">
            <h4>Marketing</h4>
            <ul>
              <li>Digital Campaigns</li>
              <li>Social Media Ads</li>
              <li>SEO Optimization</li>
              <li>Influencer Partnerships</li>
              <li>Email Marketing</li>
            </ul>
          </div>
          <div className="column">
            <h4>Instant Payments</h4>
            <ul>
              <li>Secure Payments</li>
              <li>Fast Transaction Processing</li>
              <li>Multiple Payment Methods</li>
              <li>Refund Policies</li>
              <li>24/7 Support</li>
            </ul>
          </div>
          <div className="column">
            <h4>About us</h4>
            <ul>
              <li>Our Vision</li>
              <li>Help & FAQs</li>
              <li>Terms & Policies</li>
              <li>User Reviews</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="copyright-container">
          <img src={CopyrightC} alt="Copyright" />
          <span>2024 Bajaj Money - All Rights Reserved</span>
        </div>
        <div className="credits">
          <span>Devlopedd By : (Prasanta) & Designed By : *BishnuPriya*</span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
