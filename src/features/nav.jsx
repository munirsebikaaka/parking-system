import { use, useEffect, useState } from "react";
import { IoCloseSharp, IoHomeOutline, IoMenu } from "react-icons/io5";
import {
  LuCircleParking,
  LuSquareParking,
  LuSquareParkingOff,
} from "react-icons/lu";
import { NavLink } from "react-router-dom";

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
          {showLeaveParking && (
            <li>
              <NavLink className={"link"} to="/leaveParking">
                <LuCircleParking className="icon" />
                Leave Parking
              </NavLink>
            </li>
          )}
          {/* <li>
            <NavLink className={"link"} to="/leaveParking">
              <LuCircleParking className="icon" />
              Leave Parking
            </NavLink>
          </li> */}

          <li>
            <NavLink className={"link"} to="/garage">
              <LuSquareParkingOff className="icon" />
              Garage
            </NavLink>
          </li>
          <li>
            <NavLink className={"link"} to="/account">
              <LuSquareParkingOff className="icon" />
              Account
            </NavLink>
          </li>
        </ul>
        <button className="mobile-menu-button"></button>
      </div>
    </nav>
  );
};
export default Nav;
