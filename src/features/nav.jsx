import { useState } from "react";
import { IoCloseSharp, IoHomeOutline, IoMenu } from "react-icons/io5";
import {
  LuCircleParking,
  LuSquareParking,
  LuSquareParkingOff,
} from "react-icons/lu";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul>
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
          <li>
            <NavLink className={"link"} to="/garage">
              <LuSquareParkingOff className="icon" />
              garage
            </NavLink>
          </li>
        </ul>
        <button className="mobile-menu-button"></button>
      </div>
    </nav>
  );
};
export default Nav;
