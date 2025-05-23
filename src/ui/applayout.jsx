import { Outlet } from "react-router-dom";
import Nav from "../features/nav";
import Header from "./header";

const Applayout = () => {
  return (
    <div className="applayout">
      {/* <Header /> */}
      <Nav />
      <main className="main-section">
        <Outlet />
      </main>
    </div>
  );
};
export default Applayout;
