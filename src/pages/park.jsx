import React from "react";
import "../uniqueStyles/parkingForms.css";

const VehicleEntryForm = () => {
  return (
    <div className="form-container">
      <h2 className="form-title">Vehicle Entry</h2>
      <form className="parking-form">
        <div className="form-group">
          <label htmlFor="plateNumber" className="form-label">
            License Plate Number
          </label>
          <input
            type="text"
            id="plateNumber"
            className="form-input"
            placeholder="e.g. ABC 1234"
          />
        </div>

        <div className="form-group">
          <label htmlFor="vehicleType" className="form-label">
            Vehicle Type
          </label>
          <select id="vehicleType" className="form-input">
            <option value="">Select vehicle type</option>
            <option value="car">Car</option>
            <option value="motorcycle">Motorcycle</option>
            <option value="truck">Truck</option>
            <option value="van">Van</option>
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
