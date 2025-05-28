import React from "react";
import "../uniqueStyles/auth.css";

const LoginForm = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Login to Your Account</h2>

        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="loginEmail" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="loginEmail"
              className="form-input"
              placeholder="john@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="loginPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="loginPassword"
              className="form-input"
              placeholder="••••••••"
            />
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="auth-button primary">
            Login
          </button>

          <div className="auth-footer">
            Don't have an account?{" "}
            <a href="#" className="auth-link">
              Sign up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
