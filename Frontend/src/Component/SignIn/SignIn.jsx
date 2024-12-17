import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';
import Logo from '../../assets/Bajaj1.png';
import config from '../../config'; // Import config

const SignIn = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mobile number validation
    if (!mobileNumber || mobileNumber.length < 10) {
      setError('Number is required and must be 10 digits');
      return;
    }

    // Password validation: Exactly 8 characters
    if (!password || password.length !== 8) {
      setError('Password must be exactly 8 characters');
      return;
    }

    setError(''); // Clear any previous error messages

    try {
      // Make POST request to backend login API using the base URL from config
      const response = await fetch(`${config.baseUrl}api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber: mobileNumber, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store token and phone number in localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('phoneNumber', mobileNumber); // Save phone number to localStorage
        localStorage.setItem('isAuthenticated', 'true'); // User is authenticated
        navigate('/dashboard'); // Redirect to dashboard
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      setError('An error occurred while logging in.');
    }
  };

  const handleSignUpClick = () => {
    navigate('/signup'); // Navigate to the sign-up page
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-logo">
          <img src={Logo} alt="logo" className="logo-image" />
        </div>

        <h1>Login</h1>

        {error && <div className="error-message">{error}</div>} {/* Error message */}

        <label>Mobile Number</label>
        <input
          type="text"
          placeholder="+91 xxxxxxxxxx"
          value={mobileNumber}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, '').slice(0, 10);
            setMobileNumber(value);
          }}
          className={error ? 'error-input' : ''}
          maxLength={10}
        />
        <span className="character-count">{mobileNumber.length} / 10</span>

        <label>Password</label>
        <div className="password-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={error ? 'error-input' : ''}
            maxLength={8}
          />
          <span className="toggle-password" onClick={togglePasswordVisibility}>
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>

        <button type="submit" className="login-button">Login</button>

        <div className="divider">
          <hr /> <span>or</span> <hr />
        </div>
        <button
          className="alt-login-button"
          onClick={handleSignUpClick}
          type="button"
        >
          Signup with password
        </button>
      </form>
    </div>
  );
};

export default SignIn;
