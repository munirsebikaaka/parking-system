import React, { useState } from "react";
import Nav from "../features/nav";
import { toast, ToastContainer } from "react-toastify";

const LeaveParking = () => {
  const [values, setValues] = useState({
    license: "",
    vehicleType: "",
  });

  const [vehicleTypeErorr, setVehicleTypeError] = useState("");
  const [licenseErorr, setLicenseError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const parkingData = JSON.parse(localStorage.getItem("parkingData")) || [];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const startTime = () => {
    const startTime = parkingData.find(
      (el) => el.license === values.license
    )?.startTime;
    return startTime;
  };

  const calculateMinutesPassed = () => {
    if (!startTime()) return "nothing";
    const currentTime = new Date();
    const differenceInMilliseconds = currentTime - new Date(startTime());
    const minutesPassed = differenceInMilliseconds / (1000 * 60);
    return Math.floor(minutesPassed);
  };
  const dayTime = () => {
    const startTime = new Date();
    const startHour = startTime.getHours();
    return startHour >= 6 && startHour < 18;
  };
  const nightTime = () => {
    const startTime = new Date();
    const startHour = startTime.getHours();
    return startHour >= 18 || startHour < 6;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const { license, vehicleType } = values;
    if (!license)
      return setLicenseError("Please enter your license plate number");
    setLicenseError("");
    if (!vehicleType)
      return setVehicleTypeError("Please enter your vehicle type");
    setVehicleTypeError("");
    parkingData;
    const data = parkingData.find((el) => el.license === license);
    if (!data) return alert("No parking data found for this license plate");
    if (data.vehicleType !== vehicleType)
      return alert("Vehicle type does not match the parking data");

    let parkingCost = 0;
    let isNightTime;
    let isDayTime;
    if (nightTime()) isNightTime = true;
    if (dayTime()) isDayTime = true;
    const minutesPassed = calculateMinutesPassed();
    if (isDayTime && data.vehicleType === "truck") {
      parkingCost = minutesPassed * 3;
    } else if (isNightTime && data.vehicleType === "truck") {
      parkingCost = minutesPassed * 2;
    }
    if (isDayTime && data.vehicleType === "car") {
      parkingCost = minutesPassed * 2;
    } else if (isNightTime && data.vehicleType === "car") {
      parkingCost = minutesPassed * 1;
    }
    if (isDayTime && data.vehicleType === "motorcycle") {
      parkingCost = minutesPassed * 1;
    } else if (isNightTime && data.vehicleType === "motorcycle") {
      parkingCost = minutesPassed * 0.5;
    }
    const updatedParkingData = parkingData.filter(
      (el) => el.license !== license
    );
    localStorage.setItem("parkingData", JSON.stringify(updatedParkingData));
    setValues({
      license: "",
      vehicleType: "",
    });
    setSuccessMsg(
      `You have parked for ${minutesPassed} minutes. Your parking cost is $${parkingCost}. Thank you for using our service!`
    );
    toast.success("Exit parking successfully!");
  };
  return (
    <div>
      <Nav />
      <div className="leave-container">
        <ToastContainer
          position="top-center"
          style={{ fontSize: "1px", fontFamily: "Outfit" }}
        />

        <div className="leave-card">
          <p className="vehicleError">{vehicleTypeErorr}</p>
          <p className="licenseError">{licenseErorr}</p>
          <div className="leave-header">
            <h1>Exit Parking</h1>
            <p>Provide your details to complete the parking session.</p>
          </div>

          <form className="leave-form" onSubmit={onSubmitHandler}>
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
              <label htmlFor="parking-id">Vehicle type</label>
              <input
                type="text"
                name="vehicleType"
                value={values.vehicleType}
                onChange={handleChange}
                placeholder="vehicle type"
                className="form-input"
                style={
                  vehicleTypeErorr.length > 0
                    ? { border: "1px solid  #991b1b" }
                    : { border: "1px solid  #d1d5db" }
                }
              />
            </div>

            <button type="submit" className="leave-button">
              Exit Parking
            </button>
          </form>
          <p className="successMsg">{successMsg}</p>
        </div>
      </div>
    </div>
  );
};

export default LeaveParking;
