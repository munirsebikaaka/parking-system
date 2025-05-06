import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import LeaveParking from "./pages/leave";
import Login from "./pages/login";
import Parking from "./pages/parking";
import Signup from "./pages/signup";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parking" element={<Parking />} />
          <Route path="/leaveParking" element={<LeaveParking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
