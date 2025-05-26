// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">IT223 - Web Systems and Technologies</h2>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/feature">Explore</Link>
        <Link to="/map">Map View</Link>  {/* <-- Add this line */}
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
