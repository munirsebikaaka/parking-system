import { useState } from "react";
import { IoCloseSharp, IoHomeOutline, IoMenu } from "react-icons/io5";
import {
  LuCircleParking,
  LuSquareParking,
  LuSquareParkingOff,
} from "react-icons/lu";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [hours, setHours] = useState(new Date().toLocaleTimeString());
  const [showNav, setShowNav] = useState(false);
  const updateHours = () => {
    setHours(new Date().toLocaleTimeString());
  };
  setInterval(updateHours, 1000);
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <LuCircleParking />
          <p className="clock">{hours}</p>
        </div>
        <ul className={!showNav ? "nav-links" : "show-links"}>
          <li>
            <NavLink className={"link"} to="/">
              <IoHomeOutline className="icon" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={"link"} to="/parking">
              <LuSquareParking className="icon" />
              Parking
            </NavLink>
          </li>
          <li>
            <NavLink className={"link"} to="/leaveParking">
              <LuSquareParkingOff className="icon" />
              Leave Parking
            </NavLink>
          </li>
        </ul>
        <button
          className="mobile-menu-button"
          onClick={() => setShowNav((condition) => !condition)}
        >
          {!showNav ? <IoMenu /> : <IoCloseSharp />}
        </button>
      </div>
    </nav>
  );
};
export default Nav;
