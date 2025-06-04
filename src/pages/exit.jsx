import { useState } from "react";
import "../uniqueStyles/parkingForms.css";
import { toast, ToastContainer } from "react-toastify";
import js from "@eslint/js";

const VehicleExitForm = () => {
  const [values, setValues] = useState({ license: "" });
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

  const countMoneyPaid = (
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
      parkingCoast = (minutesPassed / 60) * realDayPayment;
      console.log(
        `u hv spent ${(minutesPassed / 60).toFixed(
          2
        )} hours, u gona pay ${parkingCoast.toFixed(2)}`
      );

      let leftParkingData = [];
      leftParkingData =
        JSON.parse(localStorage.getItem("leftParkingData")) || [];
      const leftCar = parkingData.find(
        (vehicle) => vehicle.license === values.license
      );
      leftParkingData.push(leftCar);
      localStorage.setItem("leftParkingData", JSON.stringify(leftParkingData));

      const updatedParkingData = parkingData.filter(
        (vehicle) => vehicle.license !== values.license
      );
      localStorage.setItem("parkingData", JSON.stringify(updatedParkingData));
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
        `u hv spent ${(minutesPassed / 60).toFixed(
          2
        )} hours, u gona pay ${parkingCoast.toFixed(2)}`
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
        `u hv spent ${(minutesPassed / 60).toFixed(
          2
        )} hours, u gona pay ${parkingCoast.toFixed(2)}`
      );
    } else if (
      isNightTime &&
      startParkingTime >= 18 &&
      data.vehicleType === vehicle
    ) {
      parkingCoast = minutesPassed * realNightPayment;
      console.log(
        `u hv spent ${(minutesPassed / 60).toFixed(
          2
        )} hours, u gona pay ${parkingCoast.toFixed(2)}`
      );
    } else if (
      isNightTime &&
      startParkingTime < 6 &&
      data.vehicleType === vehicle
    ) {
      parkingCoast = minutesPassed * realNightPayment;
      console.log(
        `u hv spent ${(minutesPassed / 60).toFixed(
          2
        )} hours, u gona pay ${parkingCoast.toFixed(2)}`
      );
    } else if (
      isNightTime &&
      startParkingTime >= 6 &&
      startParkingTime < 18 &&
      data.vehicleType === vehicle
    ) {
      const timeBeforeNightTime = 18 - startParkingTime;
      const timeBeforeNightTimeMinutes = Math.abs(timeBeforeNightTime * 60);
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
        `u hv spent ${(minutesPassed / 60).toFixed(
          2
        )} hours, u gona pay ${parkingCoast.toFixed(2)}`
      );
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const { license } = values;
    if (!license) return;
    const data = parkingData.find((el) => el.license === license);

    if (data) {
      countMoneyPaid(data, "truck", 2, 3, 3, 2);
      countMoneyPaid(data, "car", 1, 2, 2, 1);
      countMoneyPaid(data, "motorcycle", 0.5, 1, 1, 0.5);
    } else {
      alert("License plate not found");
    }
  };

  return (
    <div className="form-container">
      <ToastContainer
        position="top-center"
        style={{ fontSize: "1px", fontFamily: "Outfit" }}
      />

      <h2 className="form-title">Vehicle Exit</h2>
      <form className="parking-form" onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="exitPlateNumber" className="form-label">
            License Plate Number
          </label>
          <input
            type="text"
            name="license"
            onChange={handleChange}
            value={values.license}
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
