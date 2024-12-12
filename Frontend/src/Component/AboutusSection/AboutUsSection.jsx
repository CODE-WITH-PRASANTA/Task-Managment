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
            <p className="about-sec-mission">Our mission is Design the best websites around</p>
            <div className="about-sec-content">
                <div className="about-sec-text">
                    <h3>I'm In The Devlop Industry With 2 Years Of Experience.</h3>
                    <p>We are Prasanta Kumar, a skilled professional Web developer, and Rehan a dedicated Digital marketing specialist. Together, we create user-friendly, attractive, and effective websites for all needs. Our goal is to make your online presence seamless and engaging, with a focus on quality and performance. We combine development expertise and marketing know-how to build and optimize sites that work beautifully and capture attention. From simple websites to custom solutions, we’re here to help you succeed online. Partner with us for friendly service and reliable results you can trust. Let's create something amazing together!</p>
                    <div className="skills-section">
                        <h4>Professional Skills Work</h4>
                        <div className="skills">
                            {['Web Designing', 'App Designing', '! ADS & SEO', '3D Designing'].map((skill, index) => (
                                <div className="box" key={index}>
                                    <div className="bar">
                                        <canvas className="circle"></canvas>
                                        <span>{[95, 70, 95, 98][index]}%</span>
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
                        <h4>Prasanta Kumar Khuntia</h4>
                        <p>Mern Stack Developer</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
  );
};

export default AboutUsSection;
