import { Outlet } from "react-router-dom";
import Navigation from "./nav";

const Applayout = () => {
  return (
    <div className="applayout">
      <Navigation />
      <main className="main-section">
        <Outlet />
      </main>
    </div>
  );
};
export default Applayout;
