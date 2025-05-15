import React, { useState } from "react";
import Nav from "../features/nav";
import { ToastContainer, toast } from "react-toastify";

const Parking = () => {
  const [values, setValues] = useState({ license: "", vehicleType: "" });
  const [vehicleTypeErorr, setVehicleTypeError] = useState("");
  const [licenseErorr, setLicenseError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const { license, vehicleType } = values;
    if (!license)
      return setLicenseError("Please enter your license plate number");
    setLicenseError("");
    if (!vehicleType)
      return setVehicleTypeError("Please select your vehicle type");
    setVehicleTypeError("");
    let parkingData = [];
    parkingData = JSON.parse(localStorage.getItem("parkingData")) || [];
    const data = {
      license: license,
      vehicleType: vehicleType,
      startTime: new Date(),
    };
    parkingData.push(data);
    localStorage.setItem("parkingData", JSON.stringify(parkingData));
    setValues({ license: "", vehicleType: "" });
    toast.success("Parking confirmed successfully!");
  };
  return (
    <div>
      <div className="parking-container">
        <ToastContainer
          position="top-center"
          style={{ fontSize: "14px", fontFamily: "Outfit" }}
        />

        <div className="parking-card">
          <p className="vehicleError">{vehicleTypeErorr}</p>
          <p className="licenseError">{licenseErorr}</p>
          <div className="parking-header">
            <h1>Park Your Vehicle</h1>
            <p>Fill in your vehicle details to secure your parking spot.</p>
          </div>

          <form className="parking-form" onSubmit={onSubmitHandler}>
            <div className="form-group">
              <label htmlFor="license">License Plate Number</label>
              <input
                type="text"
                name="license"
                value={values.license}
                onChange={handleChange}
                placeholder="Enter license plate"
                className="form-input"
                style={
                  licenseErorr.length > 0
                    ? { border: "1px solid  #991b1b" }
                    : { border: "1px solid  #d1d5db" }
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="vehicle-type">Vehicle Type</label>
              <select
                name="vehicleType"
                value={values.vehicleType}
                onChange={handleChange}
                id="vehicle-type"
                className="form-select"
                style={
                  vehicleTypeErorr.length > 0
                    ? { border: "1px solid  #991b1b" }
                    : { border: "1px solid  #d1d5db" }
                }
              >
                <option value="">Select vehicle type</option>
                <option value="car">Car</option>
                <option value="truck">Truck</option>
                <option value="motorcycle">Motorcycle</option>
              </select>
            </div>
            <button type="submit" className="parking-button">
              Confirm Parking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Parking;
