import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  isLowerCaseAdded,
  isNumsAdded,
  isSymbolsAdded,
  isUpperCaseAdded,
} from "../services/passwordStrength/passwordStrength";
import { NavLink } from "react-router-dom";
import "../uniqueStyles/forms.css";
import { toast, ToastContainer } from "react-toastify";

const SignUp = () => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [nameError, setNameError] = useState("");
  const [signEmailError, setSignEmailError] = useState("");
  const [signPasswordError, setSignPasswordError] = useState("");
  const [cormfirmPasswordError, setComfirmPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const { fullname, email, password, confirmPassword } = values;
    if (!fullname) return setNameError("Please enter your full name");
    setNameError("");

    if (!email) return setSignEmailError("Please enter your email address");
    setSignEmailError("");

    if (!password) return setSignPasswordError("Please enter your password");
    setSignPasswordError("");

    if (password.length < 6)
      return setSignPasswordError(
        "Password must be at least 6 characters long"
      );
    setSignPasswordError("");

    if (!confirmPassword)
      return setComfirmPasswordError("Please confirm your password");
    setComfirmPasswordError("");

    if (password !== confirmPassword)
      return setComfirmPasswordError("Passwords do not match");
    setComfirmPasswordError("");

    let userData = [];
    userData = JSON.parse(localStorage.getItem("userData")) || [];
    userData.push({
      fullname: fullname,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      accountID: `${email}${Math.random() * 10}${new Date().toISOString()}`,
      managerCode: email.slice(0, 7) == "0742256" && email.slice(0, 7),
    });
    localStorage.setItem("userData", JSON.stringify(userData));
    setValues({
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    toast.success("Account created successfully!");
  };
  return (
    <div className="signup-container">
      <ToastContainer
        position="top-right"
        style={{ fontSize: "16px", fontFamily: "Outfit" }}
      />
      <div className="signup-card">
        <p className="nameError">{nameError}</p>
        <p className="signEmailError">{signEmailError}</p>
        <p className="signPasswordError">{signPasswordError}</p>
        {!showPassword ? (
          <FaEye className="signupEye" onClick={() => setShowPassword(true)} />
        ) : (
          <FaEyeSlash
            className="signupEyeHide"
            onClick={() => setShowPassword(false)}
          />
        )}
        {!showPasswordRepeat ? (
          <FaEye
            className="signupEyeRepeat"
            onClick={() => setShowPasswordRepeat(true)}
          />
        ) : (
          <FaEyeSlash
            className="signupEyeHideRepeat"
            onClick={() => setShowPasswordRepeat(false)}
          />
        )}

        <p className="cormfirmPasswordError">{cormfirmPasswordError}</p>
        <div className="signup-header">
          <h1>Create Account</h1>
          <p>
            Join our parking community and enjoy unlimitted parking experiences.
          </p>
        </div>

        <form className="signup-form" onSubmit={onSubmitHandler}>
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              name="fullname"
              value={values.fullname}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="form-input"
              style={
                nameError.length > 0
                  ? { border: "1px solid  #991b1b" }
                  : { border: "1px solid  #d1d5db" }
              }
            />
          </div>

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
                signEmailError.length > 0
                  ? { border: "1px solid  #991b1b" }
                  : { border: "1px solid  #d1d5db" }
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Create a password"
              className="form-input"
              style={
                signPasswordError.length > 0
                  ? { border: "1px solid  #991b1b" }
                  : { border: "1px solid  #d1d5db" }
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type={showPasswordRepeat ? "text" : "password"}
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="form-input"
              style={
                cormfirmPasswordError.length > 0
                  ? { border: "1px solid  #991b1b" }
                  : { border: "1px solid  #d1d5db" }
              }
            />
          </div>

          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
        <div className="login-link">
          <p className="switch">
            Already have an account?
            <NavLink to="/" className="login-link">
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
