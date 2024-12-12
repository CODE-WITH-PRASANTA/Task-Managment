import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../../assets/company-logo-white.png';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaDollarSign, FaInfoCircle, FaPhoneAlt } from 'react-icons/fa'; // Importing icons

const Navbar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuItemClick = (route) => {
        navigate(route);
        setIsMenuOpen(false);  // Close the menu after navigation
    };

    return (
        <div className='navbar'>
            <div className="nav-container">
                <img src={Logo} alt="Logo" className='Logo' onClick={() => handleMenuItemClick('/')}  />
                <button className="menu-toggle" onClick={handleToggleMenu}>
                    <span className="menu-icon"></span>
                    <span className="menu-icon"></span>
                    <span className="menu-icon"></span>
                </button>
                <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                    <li onClick={() => handleMenuItemClick('/')}><FaHome /> Home</li>
                    <li onClick={() => handleMenuItemClick('/about')}><FaInfoCircle /> About Us</li>
                    <li onClick={() => handleMenuItemClick('/pricing')}><FaDollarSign /> Pricing</li>
                    <li onClick={() => handleMenuItemClick('/contactus')}><FaPhoneAlt /> Contact Us</li>
                </ul>
                <div className="nav-right">
                    <button className="get-started" onClick={() => navigate('/signup')}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
