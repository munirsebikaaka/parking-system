import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const { email, password } = values;
    if (!email) return alert("Please enter your email address");
    if (!password) return alert("Please enter your password");
    let userData = JSON.parse(localStorage.getItem("userData"));
    if (!userData) return alert("No user data found. Please sign up first.");
    const user = userData.find((user) => user.email === email);
    const { password: userPassword } = user;
    if (!user) return alert("Invalid email ");
    if (userPassword !== password) return alert("Invalid password");
    toast.success("Login successful!");
    setValues({ email: "", password: "" });
  };
  return (
    <div className="login-container">
      <ToastContainer position="top-center" />
      <div className="login-card">
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
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="form-input"
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>

          <div className="signup-link">
            <p>
              Don't have an account? <a href="/signup">Sign up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
