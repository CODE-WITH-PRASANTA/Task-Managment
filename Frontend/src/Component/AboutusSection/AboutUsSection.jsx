import React from 'react';
import './AboutUsSection.css';
import aboutusimg from '../../assets/about.png'


const AboutUsSection= () => {
  return (
    <>

{/* about-sec us page */}
<div className="about-sec-section">
<div className="about-sec-container">
            <h2 className="about-sec-title">About Us</h2>
            <p className="about-sec-mission">Our mission is to make entertainment rewarding and earning effortless</p>
            <div className="about-sec-content">
                <div className="about-sec-text">
                    <h3>We're Innovators With a Passion for Rewards and Growth.</h3>
                    <p>We are Samar Khaira, an innovative CEO, Ravi Chandra, a dynamic strategist, and Vikash Madan, a skilled professional dedicated to providing rewarding opportunities for all. Together, we’ve built a platform where users can complete tasks and earn exciting rewards, ensuring every effort is worthwhile.Our services go beyond task completion. We also offer secure investment opportunities with guaranteed payments, enabling you to grow your wealth confidently. Join us to explore a world where earning is simple, investment is rewarding, and trust is our foundation. Together, we’re redefining opportunities and helping you reach your goals seamlessly. Let’s create success, one task at a time!</p>
                    <div className="skills-section">
                        <h4>Our Expertise and Skills</h4>
                        <div className="skills">
                            {['Task Reward', 'Investments', 'Guaranted Pay', 'Engagement'].map((skill, index) => (
                                <div className="box" key={index}>
                                    <div className="bar">
                                        <canvas className="circle"></canvas>
                                        <span>{[95, 50, 100, 98][index]}%</span>
                                    </div>
                                    <p>{skill}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="about-sec-image">
                    <img src={aboutusimg} alt="Profile" />
                    <div className="fl-about-sec-img-content">
                        <h4>SAMAR KHAIRA</h4>
                        <p>CEO : BAJAJ MONEY</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
  );
};

export default AboutUsSection;
