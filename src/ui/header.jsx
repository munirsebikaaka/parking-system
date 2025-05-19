import { useState } from "react";

const Header = () => {
  const [hours, setHours] = useState(new Date().toLocaleTimeString());
  const updateHours = () => {
    setHours(new Date().toLocaleTimeString());
  };
  setInterval(updateHours, 1000);
  return (
    <div className="header">
      <h1>Park Easy</h1>
      <p>{hours}</p>
    </div>
  );
};
export default Header;
