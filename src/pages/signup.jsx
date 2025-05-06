import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const { fullname, email, password, confirmPassword } = values;
    if (!fullname) return alert("Please enter your full name");
    if (!email) return alert("Please enter your email address");
    if (!password) return alert("Please enter your password");
    if (!confirmPassword) return alert("Please confirm your password");
    if (password !== confirmPassword) return alert("Passwords do not match");
    if (password.length < 6)
      return alert("Password must be at least 6 characters long");
    let userData = [];
    // localStorage.setItem("userData", JSON.stringify(userData));
    userData = JSON.parse(localStorage.getItem("userData")) || [];
    userData.push({
      fullname: fullname,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
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
      <ToastContainer position="top-center" />
      <div className="signup-card">
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
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Create a password"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="form-input"
            />
          </div>

          <button type="submit" className="signup-button">
            Sign Up
          </button>

          <div className="login-link">
            <p>
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
