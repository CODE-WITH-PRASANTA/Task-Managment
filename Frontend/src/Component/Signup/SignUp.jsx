import React, { useState } from 'react';
import Logo from '../../assets/companylogo-red.svg';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';  // Import axios

const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSignup = async (e) => {
        e.preventDefault();
      
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          setError('Please enter a valid email address');
          return;
        }
      
        if (password !== confirmPassword) {
          setError('Passwords do not match');
          return;
        } else if (password.length < 6 || password.length > 8 || !/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
          setError('Password must be 6-8 characters long and contain at least one letter and one digit.');
          return;
        }
      
        setError('');
      
        try {
          const response = await axios.post('http://localhost:5000/api/auth/signup', {
            email,
            phoneNumber,
            password
          });
      
          console.log(response.data);
          navigate('/signin');
        } catch (err) {
          setError(err.response?.data?.message || 'Signup failed');
        }
      };
      

    const handleLoginPass = () => navigate('/signin');

    return (
        <div className="Signup-Container">
            <div className="Signup-Form">
                <img src={Logo} alt="logo-footer" className="SignUp-Logo" />
                <h3 className="title">Sign Up</h3>
                <form onSubmit={handleSignup}>
                    <div className="Sign-Content">
                        <input
                            type="email"
                            className="Form-Control"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="Sign-Content">
                        <input
                            type="text"
                            className="Form-Control"
                            placeholder="+91 xxxxxxxxxx"
                            maxLength="10"
                            value={phoneNumber}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>

                    <div className="Sign-Content password-field">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            className="Form-Control"
                            placeholder="Enter Password"
                            maxLength="8"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span className="toggle-password" onClick={togglePasswordVisibility}>
                            {showPassword ? '🙈' : '👁️'}
                        </span>
                    </div>

                    <div className="Sign-Content password-field">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            className="Form-Control"
                            placeholder="Confirm Password"
                            maxLength="8"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <span className="toggle-password" onClick={togglePasswordVisibility}>
                            {showPassword ? '🙈' : '👁️'}
                        </span>
                    </div>

                    <div className="form-text">
                        Password must be 6-8 characters long, contain at least one letter and one digit.
                    </div>

                    {error && <p className="error-message">{error}</p>}

                    <button type="submit" className="Signup-button">
                        Create Account
                    </button>

                    <div className="form-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={handleLoginPass}
                        >
                            Login with Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
