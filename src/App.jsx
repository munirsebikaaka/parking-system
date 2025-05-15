import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import LeaveParking from "./pages/leave";
import Login from "./features/login";
import SignUp from "./features/signup";
import Parking from "./pages/parking";
import Garage from "./pages/garage";
import Applayout from "./ui/applayout";
import Dashboard from "./ui/dashbord";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Applayout />}>
            <Route index element={<Navigate replace to={"home"} />} />
            <Route path="home" element={<Home />} />
            <Route path="parking" element={<Parking />} />
            <Route path="leaveParking" element={<LeaveParking />} />
            <Route path="garage" element={<Garage />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
