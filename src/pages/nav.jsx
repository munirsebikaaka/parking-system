import React, { useState } from "react";
import "../uniqueStyles/nav.css"; // Ensure this path is correct

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-brand">
          <a href="/" className="navbar-logo">
            ParkEasy
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`navbar-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/entry" className="nav-link">
                Vehicle Entry
              </a>
            </li>
            <li className="nav-item">
              <a href="/exit" className="nav-link">
                Vehicle Exit
              </a>
            </li>
            <li className="nav-item">
              <a href="/garage" className="nav-link">
                Current Garage
              </a>
            </li>
            <li className="nav-item">
              <a href="/account" className="nav-link">
                My Account
              </a>
            </li>
          </ul>

          {/* Auth Buttons - Visible on desktop */}
          <div className="navbar-auth">
            <a href="/login" className="auth-button login">
              Login
            </a>
            <a href="/signup" className="auth-button signup">
              Sign Up
            </a>
          </div>
        </div>

        {/* Auth Buttons - Visible on mobile when menu is open */}
        {isMenuOpen && (
          <div className="navbar-auth-mobile">
            <a href="/login" className="auth-button login">
              Login
            </a>
            <a href="/signup" className="auth-button signup">
              Sign Up
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
