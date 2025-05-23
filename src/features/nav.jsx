import { use, useEffect, useState } from "react";
import { IoCloseSharp, IoHomeOutline, IoMenu } from "react-icons/io5";
import {
  LuCircleParking,
  LuSquareParking,
  LuSquareParkingOff,
} from "react-icons/lu";
import "../uniqueStyles/nav.css";
import { NavLink } from "react-router-dom";
import { TbDoorExit } from "react-icons/tb";
import { MdAccountCircle } from "react-icons/md";
import { FaTruck } from "react-icons/fa6";
import { BiSolidParking } from "react-icons/bi";

const Nav = () => {
  const [showLeaveParking, setShowLeaveParking] = useState(false);
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData") || "[]");

    const logedInEmail = localStorage.getItem("logedInEmail");
    const user = userData?.find((user) => user.email === logedInEmail);
    const managerCode = localStorage.getItem("managerCode");

    if (user) {
      if (user.managerCode === managerCode) {
        setShowLeaveParking(true);
      }
    }
  }, []);

  return (
    <div className="navbar">
      <div className="logo-cell">
        {/* <p className="logo"> */}
        <BiSolidParking className="logo" />
        {/* </p> */}
        <h1 className="name">Park Easy</h1>
      </div>
      <nav className="nav-container">
        <ul>
          <li>
            <NavLink className={"link"} to="/">
              {/* <IoHomeOutline className="icon" /> */}
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={"link"} to="/parking">
              {/* <FaTruck className="icon" /> */}
              park vehicle
            </NavLink>
          </li>
          {showLeaveParking && (
            <li>
              <NavLink className={"link"} to="/leaveParking">
                {/* <TbDoorExit className="icon" /> */}
                exit park
              </NavLink>
            </li>
          )}
          <li>
            <NavLink className={"link"} to="/garage">
              {/* <LuSquareParking className="icon" /> */}
              parking
            </NavLink>
          </li>
          <li>
            <NavLink className={"link"} to="/account">
              {/* <MdAccountCircle className="icon" /> */}
              Account
            </NavLink>
          </li>
        </ul>
        <button className="mobile-menu-button"></button>
      </nav>
      <div className="profile">
        <div className="difault">
          <h2>m</h2>
          <h2>s</h2>
        </div>
        {/* <p className="time">time hour</p> */}
      </div>
    </div>
  );
};
export default Nav;
