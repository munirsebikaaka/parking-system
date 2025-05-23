import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import LeaveParking from "./pages/leave";
import Login from "./features/login";
import SignUp from "./features/signup";
import Parking from "./pages/parking";
import Garage from "./pages/garage";
import Applayout from "./ui/applayout";
import { useEffect, useState } from "react";

function App() {
  const [showApp, setShowApp] = useState(false);
  const [showLeaveParking, setShowLeaveParking] = useState(false);
  useEffect(() => {
    if (showApp) {
      localStorage.setItem("showApp", true);
    }
  }, [showApp]);
  useEffect(() => {
    const showApp = localStorage.getItem("showApp");
    if (showApp) {
      setShowApp(true);
    }
  }, []);
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData") || "[]");
    const logedInEmail = localStorage.getItem("logedInEmail");
    const user = userData?.find((user) => user.email === logedInEmail);
    const managerCode = localStorage.getItem("managerCode");

    if (user) {
      if (user.managerCode === managerCode) {
        setShowLeaveParking(true);
      }
    }
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              showApp ? (
                <Applayout />
              ) : (
                <Login setShowApp={setShowApp} setShowSignUp={setShowApp} />
              )
            }
          >
            <Route index element={<Navigate replace to={"home"} />} />
            <Route path="home" element={<Home />} />
            <Route path="parking" element={<Parking />} />

            <Route path="leaveParking" element={<LeaveParking />} />

            <Route path="garage" element={<Garage />} />
          </Route>
          <Route path="signup" element={<SignUp setShowApp={setShowApp} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
