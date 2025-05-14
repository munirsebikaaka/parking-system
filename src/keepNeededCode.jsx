const onSubmitHandler = (e) => {
  e.preventDefault();
  const { license, vehicleType } = values;
  const data = parkingData.find((el) => el.license === license);

  let isDayTime;
  let isNightTime;
  let parkingCoast = 0;
  let leaveTime = endTime();
  let minutesPassed = calculateMinutesPassed();
  if (dayTime()) isDayTime = true;
  if (nightTime()) isNightTime = true;
  if (
    isDayTime &&
    leaveTime >= 6 &&
    leaveTime < 18 &&
    data.vehicleType === "truck"
  ) {
    parkingCoast = minutesPassed * 3;
    console.log(
      `u hv spent ${minutesPassed} minutes, u gona pay ${parkingCoast}`
    );
  } else if (
    isDayTime &&
    leaveTime >= 18 &&
    leaveTime < 6 &&
    data.vehicleType === "truck"
  ) {
    const extraTime = leaveTime - 18;
    const extraMinutes = extraTime * 60;
    const extraParkingCost = extraMinutes * 2;
    const parkingFee = minutesPassed * 3;
    parkingCoast = extraParkingCost + parkingFee;
    console.log("extra mins", extraMinutes);
    console.log("extra fee", extraParkingCost);
    console.log("minutes passed", minutesPassed);
    console.log(
      `u hv spent ${minutesPassed} minutes, u gona pay ${parkingCoast}`
    );
  } else if (
    isNightTime &&
    leaveTime >= 18 &&
    leaveTime < 6 &&
    data.vehicleType === "truck"
  ) {
    parkingCoast = minutesPassed * 2;
    console.log(
      `u hv spent ${minutesPassed} minutes, u gona pay ${parkingCoast}`
    );
  } else if (
    isNightTime &&
    leaveTime >= 6 &&
    leaveTime < 18 &&
    data.vehicleType === "truck"
  ) {
    const extraTime = leaveTime - 6;
    const extraMinutes = extraTime * 60;
    const extraParkingCost = extraMinutes * 3;
    const parkingFee = minutesPassed * 2;
    parkingCoast = extraParkingCost + parkingFee;

    console.log(
      `u hv spent ${minutesPassed} minutes, u gona pay ${parkingCoast}`
    );
  } else if (
    isDayTime &&
    leaveTime >= 6 &&
    leaveTime < 18 &&
    data.vehicleType === "car"
  ) {
    parkingCoast = minutesPassed * 2;
    console.log(
      `u hv spent ${minutesPassed} minutes, u gona pay ${parkingCoast}`
    );
  } else if (
    isDayTime &&
    leaveTime >= 18 &&
    leaveTime < 6 &&
    data.vehicleType === "car"
  ) {
    const extraTime = leaveTime - 18;
    const extraMinutes = extraTime * 60;
    const extraParkingCost = extraMinutes * 1;
    const parkingFee = minutesPassed * 2;
    parkingCoast = extraParkingCost + parkingFee;

    console.log(
      `u hv spent ${minutesPassed} minutes, u gona pay ${parkingCoast}`
    );
  } else if (
    isNightTime &&
    leaveTime >= 18 &&
    leaveTime < 6 &&
    data.vehicleType === "car"
  ) {
    parkingCoast = minutesPassed * 1;
    console.log(
      `u hv spent ${minutesPassed} minutes, u gona pay ${parkingCoast}`
    );
  } else if (
    isNightTime &&
    leaveTime >= 6 &&
    leaveTime < 18 &&
    data.vehicleType === "car"
  ) {
    const extraTime = leaveTime - 6;
    const extraMinutes = extraTime * 60;
    const extraParkingCost = extraMinutes * 2;
    const parkingFee = minutesPassed * 1;
    parkingCoast = extraParkingCost + parkingFee;

    console.log(
      `u hv spent ${minutesPassed} minutes, u gona pay ${parkingCoast}`
    );
  } else if (
    isDayTime &&
    leaveTime >= 6 &&
    leaveTime < 18 &&
    data.vehicleType === "motorcycle"
  ) {
    parkingCoast = minutesPassed * 1;
    console.log(
      `u hv spent ${minutesPassed} minutes, u gona pay ${parkingCoast}`
    );
  } else if (
    isDayTime &&
    leaveTime >= 18 &&
    leaveTime < 6 &&
    data.vehicleType === "motorcycle"
  ) {
    const extraTime = leaveTime - 18;
    const extraMinutes = extraTime * 60;
    const extraParkingCost = extraMinutes * 0.5;
    const parkingFee = minutesPassed * 1;
    parkingCoast = extraParkingCost + parkingFee;
    // console.log()

    console.log(
      `u hv spent ${minutesPassed} minutes, u gona pay ${parkingCoast}`
    );
  } else {
    console.log("nthg is workin");
  }
};
//  const onSubmitHandler = (e) => {
//   e.preventDefault();
//   const { license, vehicleType } = values;
//   if (!license)
//     return setLicenseError("Please enter your license plate number");
//   setLicenseError("");
//   if (!vehicleType)
//     return setVehicleTypeError("Please enter your vehicle type");
//   setVehicleTypeError("");
//   parkingData;
//   const data = parkingData.find((el) => el.license === license);
//   if (!data) return alert("No parking data found for this license plate");
//   if (data.vehicleType !== vehicleType)
//     return alert("Vehicle type does not match the parking data");

//   let parkingCost = 0;
//   let isNightTime;
//   let isDayTime;
//   if (nightTime()) isNightTime = true;
//   if (dayTime()) isDayTime = true;
//   const minutesPassed = calculateMinutesPassed();
//   if (isDayTime && data.vehicleType === "truck") {
//     parkingCost = minutesPassed * 3;
//   } else if (isNightTime && data.vehicleType === "truck") {
//     parkingCost = minutesPassed * 2;
//   }
//   if (isDayTime && data.vehicleType === "car") {
//     parkingCost = minutesPassed * 2;
//   } else if (isNightTime && data.vehicleType === "car") {
//     parkingCost = minutesPassed * 1;
//   }
//   if (isDayTime && data.vehicleType === "motorcycle") {
//     parkingCost = minutesPassed * 1;
//   } else if (isNightTime && data.vehicleType === "motorcycle") {
//     parkingCost = minutesPassed * 0.5;
//   }
//   const updatedParkingData = parkingData.filter(
//     (el) => el.license !== license
//   );
//   localStorage.setItem("parkingData", JSON.stringify(updatedParkingData));
//   setValues({
//     license: "",
//     vehicleType: "",
//   });
//   setSuccessMsg(
//     `You have parked for ${minutesPassed} minutes. Your parking cost is $${parkingCost}. Thank you for using our service!`
//   );
//   toast.success("Exit parking successfully!");
// };
//
/* 
const onSubmitHandler = (e) => {
    e.preventDefault();
    const { license, vehicleType } = values;
    const data = parkingData.find((el) => el.license === license);

    let isDayTime;
    let isNightTime;
    let parkingCoast = 0;
    let leaveTime = endTime();
    const startParkingTime = new Date(startTime()).getHours();
    let minutesPassed = calculateMinutesPassed();

    if (dayTime()) isDayTime = true;
    if (nightTime()) isNightTime = true;
    if (
      isDayTime &&
      startParkingTime >= 6 &&
      startParkingTime < 18 &&
      data.vehicleType === "truck"
    ) {
      parkingCoast = minutesPassed * 3;
      console.log(
        `u hv spent ${minutesPassed} minutes, u gona pay ${parkingCoast}`
      );
    } else if (
      isNightTime &&
      startParkingTime >= 6 &&
      startParkingTime < 18 &&
      data.vehicleType === "truck"
    ) {
      const extraTime = leaveTime - 18;
      const extraMinutes = extraTime * 60;
      const extraParkingCost = extraMinutes * 2;
      const parkingShiftTime = minutesPassed - extraMinutes;
      const parkingShiftTimeCoast = parkingShiftTime * 3;
      parkingCoast = extraParkingCost + parkingShiftTimeCoast;

      console.log(
        `u hv spent ${minutesPassed} minutes, u gona pay ${parkingCoast}`
      );
    } else if (
      isNightTime &&
      startParkingTime >= 18 &&
      data.vehicleType === "truck"
    ) {
      parkingCoast = minutesPassed * 2;
      console.log(
        `u hv spent ${minutesPassed} minutes, u gona pay ${parkingCoast}`
      );
    } else if (
      isNightTime &&
      startParkingTime < 6 &&
      data.vehicleType === "truck"
    ) {
      parkingCoast = minutesPassed * 2;
      console.log(
        `u hv spent ${minutesPassed} minutes, u gona pay ${parkingCoast}`
      );
    } else if (
      isDayTime &&
      startParkingTime < 6 &&
      data.vehicleType === "truck"
    ) {
      const extraTime = leaveTime - 6;
      const extraMinutes = extraTime * 60;
      const extraParkingCost = extraMinutes * 3;
      const parkingShiftTime = minutesPassed - extraMinutes;
      const parkingShiftTimeCoast = parkingShiftTime * 2;
      parkingCoast = extraParkingCost + parkingShiftTimeCoast;

      console.log(
        `codes u hv spent ${minutesPassed} minutes, u gona pay ${parkingCoast}`
      );
    } else if (
      isDayTime &&
      startParkingTime >= 18 &&
      data.vehicleType === "truck"
    ) {
      const extraTime = leaveTime - 6;
      const extraMinutes = extraTime * 60;
      const extraParkingCost = extraMinutes * 3;
      const parkingShiftTime = minutesPassed - extraMinutes;
      const parkingShiftTimeCoast = parkingShiftTime * 2;
      parkingCoast = extraParkingCost + parkingShiftTimeCoast;

      console.log(
        `u hv spent ${minutesPassed} minutes, u gona pay ${parkingCoast}`
      );
    } else {
      console.log("nothin is workin");
    }
  };


*/
