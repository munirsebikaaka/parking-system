import { useState, useEffect } from "react";
import "../uniqueStyles/nav.css";
import { NavLink } from "react-router-dom";

import { IoClose, IoMenu } from "react-icons/io5";

const Navigation = () => {
  // Toggle state for opening/closing the menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State to hold the current time
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // This runs once when the component loads and keeps updating the time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Clean up the timer when the component is removed
    return () => clearInterval(timer);
  }, []);

  // Function to toggle the menu open or closed
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking a link (especially on mobile)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <NavLink to="/home" className="navbar-logo" onClick={closeMenu}>
          ParkEasy
        </NavLink>

        {/* Menu button (hamburger / close icon) */}
        <button
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
        </button>

        {/* Menu items */}
        <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <ul className="navbar-links">
            {/* Menu links */}
            <li>
              <NavLink to="/home" className="nav-link" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/entry" className="nav-link" onClick={closeMenu}>
                Entry
              </NavLink>
            </li>
            <li>
              <NavLink to="/exit" className="nav-link" onClick={closeMenu}>
                Exit
              </NavLink>
            </li>
            <li>
              <NavLink to="/garage" className="nav-link" onClick={closeMenu}>
                Garage
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
