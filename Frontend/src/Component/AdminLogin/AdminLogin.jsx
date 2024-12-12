import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'prasanta' && password === 'prasanta123') {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('isAdmin', 'true');
      localStorage.setItem('adminUsername', 'prasanta');
      setIsLoggedIn(true); // Trigger re-render
      navigate('/admin');
    } else {
      alert('Invalid Credentials');
    }
  };
  

  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <h2 className="welcome-text">Welcome To Admin</h2>
        <form onSubmit={handleLogin}>
          <div className="admin-input-contain">
            <span className="icon">👤</span>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="admin-input"
              required
            />
          </div>
          <div className="admin-input-contain">
            <span className="icon">🔒</span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="admin-input"
              required
            />
          </div>
          <button type="submit" className="signin-button">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};


export default AdminLogin;
