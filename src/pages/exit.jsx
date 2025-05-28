import React from "react";
import "../uniqueStyles/parkingForms.css";

const VehicleExitForm = () => {
  return (
    <div className="form-container">
      <h2 className="form-title">Vehicle Exit</h2>
      <form className="parking-form">
        <div className="form-group">
          <label htmlFor="exitPlateNumber" className="form-label">
            License Plate Number
          </label>
          <input
            type="text"
            id="exitPlateNumber"
            className="form-input"
            placeholder="Enter plate number to exit"
          />
        </div>

        <button type="submit" className="form-button primary">
          Process Exit
        </button>
      </form>
    </div>
  );
};

export default VehicleExitForm;
