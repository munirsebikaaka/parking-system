import { useState } from "react";
import "../uniqueStyles/auth.css";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";

const LoginForm = ({ setShowApp, setToggleRegstration }) => {
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

    if (!password) return setPasswordError("Please enter your password");

    let userData = JSON.parse(localStorage.getItem("userData"));
    console.log(userData);
    if (!userData)
      return setEmailError("No user data found. Please sign up first.");
    const user = userData.find((user) => user.email === email);

    if (!user) return setEmailError("Invalid email");
    const { password: userPassword, managerCode } = user;

    localStorage.setItem("managerCode", managerCode);
    localStorage.setItem("logedInEmail", user.email);
    localStorage.setItem("accountID", user.accountID);

    if (userPassword !== password) return setPasswordError("Wrong password!");

    setValues({ email: "", password: "" });

    setShowApp(true);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Login to Your Account</h2>

        <form className="auth-form" onSubmit={onSubmitHandler}>
          <div className="form-group">
            <p className="login-email-error">{emailError}</p>
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
              style={
                emailError.length > 0
                  ? { border: "1px solid  #991b1b" }
                  : { border: "1px solid #d1d5db" }
              }
            />
          </div>

          <div className="form-group">
            <p className="login-password-error">{passwordError}</p>
            {showPassword ? (
              <IoEye
                className="login-password-eye"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <IoEyeOffSharp
                className="login-password-eye"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
            <label htmlFor="loginPassword" className="form-label">
              Password
            </label>
            <input
              type={!showPassword ? "password" : "text"}
              name="password"
              onChange={handleChange}
              value={values.password}
              id="loginPassword"
              className="form-input"
              placeholder="••••••••"
              style={
                passwordError.length > 0
                  ? { border: "1px solid  #991b1b" }
                  : { border: "1px solid #d1d5db" }
              }
            />
          </div>

          <button type="submit" className="auth-button primary">
            Login
          </button>

          <div className="auth-footer">
            Don't have an account?
            <a
              onClick={() => setToggleRegstration(true)}
              href="#"
              className="auth-link"
            >
              Sign up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
