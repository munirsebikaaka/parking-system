import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import LeaveParking from "./pages/leave";
import Login from "./features/login";
import SignUp from "./features/signup";
import Parking from "./pages/parking";
import { useState } from "react";
import Garage from "./pages/garage";

function App() {
  const [showApp, setShowApp] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
      {!showApp ? (
        <>
          {showSignUp ? (
            <SignUp setShowSignUp={setShowSignUp} />
          ) : (
            <Login setShowApp={setShowApp} setShowSignUp={setShowSignUp} />
          )}
        </>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/parking" element={<Parking />} />
            <Route path="/leaveParking" element={<LeaveParking />} />
            <Route path="/garage" element={<Garage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
