import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUserShield, FaExclamationTriangle } from 'react-icons/fa'; // Importing React icons
import './Vip4Display.css';

const Vip4display = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ageVerified, setAgeVerified] = useState(false);
  const [ageInput, setAgeInput] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/vip4'); 
        setTasks(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tasks:', error);
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  const handleAgeVerification = () => {
    if (parseInt(ageInput) >= 18) {
      setAgeVerified(true);
    } else {
      alert('You must be 18 or older to access this content.');
    }
  };

  if (!ageVerified) {
    return (
      <div className="age-verification">
        <div className="verification-box">
          <FaUserShield size={50} className="icon" />
          <h2>Age Verification</h2>
          <p>
            <FaExclamationTriangle className="inline-icon" /> To access this content, you must confirm that you are at least 18 years old. This ensures compliance with our policies and legal requirements.
          </p>
          <p>
            <strong>Why Age Verification?</strong> <br />
            Age verification helps to protect users from accessing inappropriate or restricted content.
          </p>
          <input
            type="number"
            placeholder="Enter your age"
            value={ageInput}
            onChange={(e) => setAgeInput(e.target.value)}
          />
          <button onClick={handleAgeVerification}>Verify Age</button>
        </div>
      </div>
    );
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Vip4-display">
  <h2>Vip-4 Tasks</h2>
  <p className="intro-text">
    Welcome to Vip-4! You've successfully accessed this section. Complete the tasks below to earn rewards directly in your wallet. Follow the rules for smooth task completion.
  </p>
  <div className="rules-section">
    <h4>Rules for Completing Tasks:</h4>
    <ul>
      <li>Watch the video fully before marking it as complete.</li>
      <li>Take a screenshot after completing each task.</li>
      <li>Submit your screenshot via WhatsApp to claim your rewards.</li>
    </ul>
  </div>
  <div className="task-list">
    {tasks.length > 0 ? (
      tasks.map((task) => (
        <div key={task._id} className="task-item">
          <div className="video-container">
            <video controls>
              <source src={task.fileUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="task-details">
            <a href={task.fileUrl} target="_blank" rel="noopener noreferrer">
              <h3>{task.title}</h3>
            </a>
            <p>{task.description}</p>
          </div>
        </div>
      ))
    ) : (
      <p>No tasks available.</p>
    )}
  </div>
  <div className="whatsapp-button">
    <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer">
      <button>Send Your ScreenShot on WhatsApp</button>
    </a>
  </div>
</div>

  );
};

export default Vip4display;
