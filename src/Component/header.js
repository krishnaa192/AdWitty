import React, { useState } from 'react';
import './header.css';

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='navbar-main'>
            <div className='header-nav'>
                <div className='nav-logo'>
                    <img src='/image/adwitty.png' alt='Logo' />
                </div>
                <div
                    className={`nav-links ${menuOpen ? 'open' : ''}`}
                >
                    <a href='/'>Home</a>
                    <a href='/about'>About</a>
                    <div
                        className='nav-services'
                        onMouseEnter={() => setShowDropdown(true)}
                        onMouseLeave={() => setShowDropdown(false)}
                    >
                        <a href='/services/seo'>Services</a>
                        {showDropdown && (
                            <div className='services-dropdown'>
                                <div className='services-dropdown-item'>
                                    
                                    <a href='/services/seo'>Start Ranking Higher Today – Explore Our SEO Plans!”</a>
                                    <a href='/services/social-media'>“Grow Your Social Presence – Let’s Start Now!”</a>
                                    <a href='/services/google-my-business'>Google My Business </a>
                                    <a href='/services/webdev'>Get Your Dream Website – Book a Free Consultation Now!”</a>
                                    <a href='/services/performance-marketing'>Boost Your Campaign ROI – Talk to Our Experts!”</a>
                                </div>
                                
                            </div>
                        )}
                    </div>
                    {/* <a href='#'>Clients</a> */}
                    <a href='/contact'>Contact</a>
                    <a href='/feedback'>
                        What They Said!
                    </a>
                </div>
               
                {/* Hamburger Icon */}
                <div
                    className='nav-toggle'
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    &#9776;
                </div>
            </div>
        </div>
    );
};

export default Header;
