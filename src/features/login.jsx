import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Login = ({ setShowApp }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const { email, password } = values;
    if (!email) return setEmailError("Please enter your email address");
    setEmailError("");
    // if (!password) return setPasswordError("Please enter your password");
    // setPasswordError("");
    let userData = JSON.parse(localStorage.getItem("userData"));
    if (!userData) return alert("No user data found. Please sign up first.");
    const user = userData.find((user) => user.email === email);

    if (!user) return setEmailError("Invalid email");
    const { password: userPassword, managerCode } = user;

    localStorage.setItem("managerCode", managerCode);
    localStorage.setItem("logedInEmail", user.email);
    setEmailError("");
    // if (userPassword !== password) return setPasswordError("Wrong password!");
    // setPasswordError("");
    // setValues({ email: "", password: "" });

    setShowApp(true);
  };
  return (
    <div className="login-container">
      <div className="login-card">
        <p className="loginEmailError">{emailError}</p>
        <p className="loginPasswordError">{passwordError}</p>
        {!showPassword ? (
          <FaEye
            className="signupEyeLogin"
            onClick={() => setShowPassword(true)}
          />
        ) : (
          <FaEyeSlash
            className="signupEyeHideLogin"
            onClick={() => setShowPassword(false)}
          />
        )}
        <div className="welcome-section">
          <h1>Welcome Back!</h1>
          <p>Park with ease and convenience. Login to manage your parking.</p>
        </div>

        <form className="login-form" onSubmit={onSubmitHandler}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="form-input"
              style={
                emailError.length > 0
                  ? { border: "1px solid  #991b1b" }
                  : { border: "1px solid  #d1d5db" }
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type={!showPassword ? "password" : "text"}
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="form-input"
              style={
                passwordError.length > 0
                  ? { border: "1px solid  #1a1616" }
                  : { border: "1px solid  #d1d5db" }
              }
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="signup-link">
          <p className="switch">
            Don't have an account?
            <NavLink to="/signup" className="signup-link">
              Sign up
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
