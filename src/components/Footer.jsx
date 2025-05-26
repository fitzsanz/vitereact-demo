// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';  // <-- Import Link
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Waterfall Finder. All rights reserved.</p>
      <p>
        Made with ❤️ |{' '}
        <a href="https://github.com/fitzsanz" target="_blank" rel="noopener noreferrer">GitHub</a> |{' '}
        <Link to="/about">About Us</Link>  {/* Use Link instead of <a> */}
      </p>
    </footer>
  );
}

export default Footer;
