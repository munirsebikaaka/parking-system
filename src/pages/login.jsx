import { useState } from "react";
import "../uniqueStyles/auth.css";

const LoginForm = () => {
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
    if (!email) return alert("Please enter your email address");

    if (!password) return alert("Please enter your password");

    let userData = JSON.parse(localStorage.getItem("userData"));
    console.log(userData);
    if (!userData) return alert("No user data found. Please sign up first.");
    const user = userData.find((user) => user.email === email);

    if (!user) return alert("Invalid email");
    const { password: userPassword, managerCode } = user;

    localStorage.setItem("managerCode", managerCode);
    localStorage.setItem("logedInEmail", user.email);

    if (userPassword !== password) return alert("Wrong password!");

    setValues({ email: "", password: "" });

    alert(true);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Login to Your Account</h2>

        <form className="auth-form" onSubmit={onSubmitHandler}>
          <div className="form-group">
            <label htmlFor="loginEmail" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email}
              id="loginEmail"
              className="form-input"
              placeholder="munir@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="loginPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={values.password}
              id="loginPassword"
              className="form-input"
              placeholder="••••••••"
            />
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
