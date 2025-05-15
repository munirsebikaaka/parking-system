import { FaCarSide, FaIdCard } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import Nav from "../features/nav";

const Garage = () => {
  const parkedVehicles = JSON.parse(localStorage.getItem("parkingData")) || [];
  console.log(parkedVehicles);
  return (
    <div className="garage-container">
      <h1>Garage</h1>
      <p>Welcome to the garage page!</p>
      {parkedVehicles.length > 0 ? (
        <ul className="parked-vehicles-list">
          {parkedVehicles.map((vehicle, index) => (
            <li key={index} className="parked-vehicle-item">
              <div>
                <FaIdCard />

                <p>License Plate: {vehicle.license}</p>
              </div>
              <div>
                <FaCarSide />

                <p>Vehicle Type: {vehicle.vehicleType}</p>
              </div>
              <div>
                <MdAccessTime />

                <p>
                  Start Time: {new Date(vehicle.startTime).toLocaleString()}
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No vehicles parked in the garage.</p>
      )}
    </div>
  );
};
export default Garage;
