import { Outlet } from "react-router-dom";
import Nav from "../features/nav";

const Applayout = () => {
  return (
    <div className="applayout">
      <header>
        Application header
        {/* // const [hours, setHours] = useState(new Date().toLocaleTimeString()); */}
        {/* // const updateHours = () => { */}
        {/* // setHours(new Date().toLocaleTimeString());
  // };
  // setInterval(updateHours, 1000); */}
      </header>
      <Nav />
      <main className="main-section">
        {/* <div className="applayout-container"> */}
        <Outlet />
        {/* </div> */}
      </main>
    </div>
  );
};
export default Applayout;
