import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import LeaveParking from "./pages/leave";
import Login from "./features/login";
import SignUp from "./features/signup";
import Parking from "./pages/parking";
import { useState } from "react";

function App() {
  const [showApp, setShowApp] = useState(false);
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
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
