import { useState } from "react";
import "../uniqueStyles/parkingForms.css";

const VehicleEntryForm = () => {
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
    if (!license) return alert("Please enter your license plate number");

    if (!vehicleType) return alert("Please select your vehicle type");

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
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Vehicle Entry</h2>
      <form className="parking-form" onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="plateNumber" className="form-label">
            License Plate Number
          </label>
          <input
            type="text"
            name="license"
            onChange={handleChange}
            value={values.license}
            id="plateNumber"
            className="form-input"
            placeholder=" ABC 1234"
          />
        </div>

        <div className="form-group">
          <label htmlFor="vehicleType" className="form-label">
            Vehicle Type
          </label>
          <select
            id="vehicleType"
            className="form-input"
            name="vehicleType"
            onChange={handleChange}
            value={values.vehicleType}
          >
            <option value="">Select vehicle type</option>
            <option value="car">Car</option>
            <option value="motorcycle">Motorcycle</option>
            <option value="truck">Truck</option>
          </select>
        </div>

        <button type="submit" className="form-button primary">
          Register Vehicle
        </button>
      </form>
    </div>
  );
};

export default VehicleEntryForm;
