import React from 'react';
import './Contactus.css';
import sendarrow from '../../assets/send-arrow.png'

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Adding Web3Forms Public Access Key
    formData.append("access_key", "0b358e88-aa4b-4279-aa0d-5b6f38e5c13d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await res.json();

      if (result.success) {
        alert("Thank you! Your message has been sent successfully.");
        event.target.reset(); // Reset the form after successful submission
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error submitting the form. Please check your connection and try again.");
    }
  };

  return (
    <div className="inquiry-container">
      <h2 className="inquiry-heading">Contact Us</h2>
      <div className="full-inquiry-section">
        <div className="inquiry-info">
          <h3>Contact Us</h3>
          <h1>Let's get in touch</h1>
          <div className="contact-details">
            <div className="reach-us">
              <h4>Reach Us</h4>
              <p><strong>Bajaj Money</strong></p>
              <p></p>
              <p>Email: <a href="mailto:bajajmoney15@gmail.com">bajajmoney15@gmail.com</a></p>
              <p>🟢 <a href="https://wa.me/9650074522">+91-9650074522</a> (Mon - Sun, 10AM - 6PM)</p>
            </div>
          </div>
          <div className="action-buttons">
            <a href="https://wa.me/9650074522" target="_blank" rel="noopener noreferrer" className="whatsapp-button">WhatsApp</a>
          </div>
        </div>

        <div className="inquiry-form">
          <h2>Hey! there</h2>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <div className="contact-input-filed">
                <label>Your Name</label>
                <input type="text" name="name" placeholder="Enter your name" required />
              </div>
              <div className="contact-input-filed">
                <label>Email Address</label>
                <input type="email" name="email" placeholder="Enter your email" required />
              </div>
            </div>
            <div className="form-group">
              <div className="contact-input-filed">
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder="Enter your number" required />
              </div>
              <div className="contact-input-filed">
                <label>Subject</label>
                <input type="text" name="subject" placeholder="Enter your subject" required />
              </div>
            </div>
            <div className="contact-input-filed full-width">
              <label>Message</label>
              <textarea name="message" placeholder="Enter your message" required></textarea>
            </div>
            <button type="submit" className="submit-button">
              <img src={sendarrow} alt="Send" className="send-icon" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
