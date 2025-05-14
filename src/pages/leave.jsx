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
  const startPark = () => {
    if (!startTime()) return "nothing";
    const currentTime = new Date(startTime()).getHours();
    console.log(currentTime);
  };

  const endTime = () => {
    const endTime = new Date();
    const endHour = endTime.getHours();
    return endHour;
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

  const countMoneyPaidPerVehicleAccordingToTimeSpentAndShift = (
    data,
    vehicle,
    nightExtraPay,
    dayExtraPay,
    realDayPayment,
    realNightPayment
  ) => {
    let isDayTime;
    let isNightTime;
    let parkingCoast = 0;

    const startParkingTime = new Date(startTime()).getHours();
    let minutesPassed = calculateMinutesPassed();

    if (dayTime()) isDayTime = true;
    if (nightTime()) isNightTime = true;

    if (
      isDayTime &&
      startParkingTime >= 6 &&
      startParkingTime < 18 &&
      data.vehicleType === vehicle
    ) {
      parkingCoast = minutesPassed * realDayPayment;
      console.log(
        `u hv spent ${minutesPassed} minutes, u gona pay ${parkingCoast}`
      );
    } else if (
      isDayTime &&
      startParkingTime >= 18 &&
      data.vehicleType === vehicle
    ) {
      const timeBeforeDayTime = 18 - startParkingTime;
      const timeBeforeDayTimeMinutes = timeBeforeDayTime * 60;
      const extraMinutes = minutesPassed - timeBeforeDayTimeMinutes;

      if (extraMinutes > 0) {
        const extraParkingCost = extraMinutes * dayExtraPay;
        const parkingShiftTimeCost =
          timeBeforeDayTimeMinutes * realNightPayment;
        parkingCoast = extraParkingCost + parkingShiftTimeCost;
      } else {
        parkingCoast = minutesPassed * realNightPayment;
      }

      console.log(
        `u hv spent ${minutesPassed} minutes, u gona pay ${parkingCoast}`
      );
    } else if (
      isDayTime &&
      startParkingTime < 6 &&
      data.vehicleType === vehicle
    ) {
      const timeBeforeDayTime = 6 - startParkingTime;
      const timeBeforeDayTimeMinutes = timeBeforeDayTime * 60;
      const extraMinutes = minutesPassed - timeBeforeDayTimeMinutes;

      if (extraMinutes > 0) {
        const extraParkingCost = extraMinutes * dayExtraPay;
        const parkingShiftTimeCost =
          timeBeforeDayTimeMinutes * realNightPayment;
        parkingCoast = extraParkingCost + parkingShiftTimeCost;
      } else {
        parkingCoast = minutesPassed * realNightPayment;
      }

      console.log(
        `u hv spent ${minutesPassed} minutes, u gona pay ${parkingCoast}`
      );
    } else if (
      isNightTime &&
      startParkingTime >= 18 &&
      data.vehicleType === vehicle
    ) {
      parkingCoast = minutesPassed * realNightPayment;
      console.log(
        `u hv spent ${minutesPassed} minutes, u gona pay ${parkingCoast}`
      );
    } else if (
      isNightTime &&
      startParkingTime < 6 &&
      data.vehicleType === vehicle
    ) {
      parkingCoast = minutesPassed * realNightPayment;
      console.log(
        `u hv spent ${minutesPassed} minutes, u gona pay ${parkingCoast}`
      );
    } else if (
      isNightTime &&
      startParkingTime >= 6 &&
      startParkingTime < 18 &&
      data.vehicleType === vehicle
    ) {
      const timeBeforeNightTime = 18 - startParkingTime;
      const timeBeforeNightTimeMinutes = timeBeforeNightTime * 60;
      const extraMinutes = minutesPassed - timeBeforeNightTimeMinutes;

      if (extraMinutes > 0) {
        const extraParkingCost = extraMinutes * nightExtraPay;
        const parkingShiftTimeCost =
          timeBeforeNightTimeMinutes * realDayPayment;
        parkingCoast = extraParkingCost + parkingShiftTimeCost;
      } else {
        parkingCoast = minutesPassed * realDayPayment;
      }

      console.log(
        `u hv spent ${minutesPassed} minutes, u gona pay ${parkingCoast}`
      );
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const { license, vehicleType } = values;
    const data = parkingData.find((el) => el.license === license);
    if (data) {
      countMoneyPaidPerVehicleAccordingToTimeSpentAndShift(
        data,
        "truck",
        2,
        3,
        3,
        2
      );
      countMoneyPaidPerVehicleAccordingToTimeSpentAndShift(
        data,
        "car",
        1,
        2,
        2,
        1
      );
      countMoneyPaidPerVehicleAccordingToTimeSpentAndShift(
        data,
        "motorcycle",
        0.5,
        1,
        1,
        0.5
      );
    } else {
      setLicenseError("License plate not found");
      toast.error("License plate not found");
    }
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
            <p>Provide vehicle details to complete the parking session.</p>
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
