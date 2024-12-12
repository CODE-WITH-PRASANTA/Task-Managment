import React from "react";
import "./Pricing.css";


function Pricing() {
  return (
    <>
    <div className="pricing-page">
      <h1>Choose the Best Plan to Start Earning Money</h1>
      <div className="pricing-toggle">
        <button>Vip Purchase</button>
        <button className="active">Priminum (Save 20%)</button>
      </div>

      <div className="pricing-plans">
        <div className="all-pricing-section">
          <div className="plan">
            <h2>Free</h2>
            <p className="price">₹0 per user/Onetime</p>
            <button className="buy-now">Make a Free Trial Now</button>
            <ul>
              <li>Customizable layout options</li>
              <li>Responsive design by choice</li>
              <li>Fast loading speed optimization</li>
              <li>User-friendly content management system (CMS)</li>
              <li>Mobile-first design for optimal performance on mobile devices</li>
              <li>AI-powered content suggestions based on user behavior</li>
              <li>Basic SEO optimization</li>
              <li>Basic technical support available 24/7</li>
              <li className="highlight">Hosting and domain included</li>
              <li className="highlight">Free maintenance and updates</li>
            </ul>
          </div>

          <div className="plan">
            <h2>Vip-1</h2>
            <p className="price">₹399 per user/OneTime</p>
            <button className="buy-now">Buy now</button>
            <ul>
              <li>Business-specific templates</li>
              <li>Integration with Google Analytics</li>
              <li>Advanced SEO tools</li>
              <li>Customer Relationship Management (CRM) integration</li>
              <li>E-commerce add-on support</li>
              <li>Secure customer login portal</li>
              <li>Social media integration</li>
              <li>Support for team collaboration</li>
              <li className="highlight">Free domain hosting services</li>
            </ul>
          </div>

          <div className="plan">
            <h2>Vip-3</h2>
            <p className="price">₹499 per company/OneTime</p>
            <button className="buy-now">Buy now</button>
            <ul>
              <li>Corporate-grade templates designed for larger organizations</li>
              <li>Advanced security features</li>
              <li>Multiple user roles and permissions</li>
              <li>Custom API integrations with ERP, CRM, etc.</li>
              <li>Data protection compliance</li>
              <li>Customer support portal</li>
              <li>High-capacity hosting and bandwidth</li>
              <li className="highlight">Free domain hosting services</li>
            </ul>
          </div>

          <div className="plan">
            <h2>Vip-4</h2>
            <p className="price">₹599 per user/Onetime</p>
            <button className="buy-now">Buy now</button>
            <ul>
              <li>Custom API integrations</li>
              <li>Dynamic content from APIs</li>
              <li>Realtime updates</li>
              <li>Unlimited API requests</li>
              <li>Custom API Dashboard</li>
              <li>Optimized for Performance</li>
              <li>Secure API Connections</li>
              <li>Customizable Data Display</li>
              <li>Error Handling & Logging</li>
              <li className="highlight">Free domain hosting services</li>
            </ul>
          </div>

          <div className="plan">
            <h2>Vip-5</h2>
            <p className="price">₹699 per user/Onetime</p>
            <button className="buy-now">Buy now</button>
            <ul>
              <li>Integrated payment gateway</li>
              <li>Multiple Payment Methods</li>
              <li>Invoice generation</li>
              <li>One-Click Payments</li>
              <li>Mobile-Friendly Payment Interface</li>
              <li>Discount Codes & Coupons</li>
              <li>Security Features</li>
              <li>Integration with Admin Panel</li>
              <li>Refunds & Cancellations</li>
              <li>Custom Branding for Checkout Pages</li>
              <li>Secure transactions</li>
              <li className="highlight">Free domain hosting services</li>
            </ul>
          </div>

          <div className="plan">
            <h2>Vip-6</h2>
            <p className="price">₹999 per user/Onetime</p>
            <button className="buy-now">Buy now</button>
            <ul>
              <li>Supports multiple payment methods</li>
              <li>Banking API integrations</li>
              <li>High-level security features</li>
              <li>Payment Confirmation & Receipts</li>
              <li>Fraud Protection & Risk Management</li>
              <li>Payment Tracking & History</li>
              <li>User Authentication & Authorization</li>
              <li>Compliance with financial standards</li>
              <li className="highlight">Free domain hosting services</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    </>
  );
}

export default Pricing; 