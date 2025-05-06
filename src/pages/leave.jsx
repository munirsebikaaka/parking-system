import React, { useState } from "react";
import Nav from "../features/nav";
import { toast, ToastContainer } from "react-toastify";

const LeaveParking = () => {
  const [values, setValues] = useState({
    license: "",
    vehicleType: "",
  });
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
    if (!license) return alert("Please enter your license plate number");
    if (!vehicleType) return alert("Please enter your vehicle type");
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
      console.log("daytime car", parkingCost);
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
    alert(
      `You have parked for ${minutesPassed} minutes. Your parking cost is $${parkingCost}. Thank you for using our service!`
    );
    toast.success("Exit parking successfully!");
  };
  return (
    <div className="leave-container">
      <ToastContainer position="top-center" />
      <Nav />
      <div className="leave-card">
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
            />
          </div>

          <button type="submit" className="leave-button">
            Exit Parking
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeaveParking;
