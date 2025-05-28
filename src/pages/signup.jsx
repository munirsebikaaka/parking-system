import { useState } from "react";
import "../uniqueStyles/auth.css";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import {
  isLowerCaseAdded,
  isSymbolsAdded,
  isUpperCaseAdded,
  isNumsAdded,
} from "../services/passwordStrength/passwordStrength";

const SignupForm = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const isPasswordLengthOk = values.password.length >= 6;
  const isPasswordValid =
    isLowerCaseAdded(values.password) &&
    isUpperCaseAdded(values.password) &&
    isNumsAdded(values.password) &&
    isSymbolsAdded(values.password) &&
    isPasswordLengthOk;
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const { fullname, email, password, confirmPassword } = values;
    if (!fullname) return setNameError("Please enter your full name");
    setNameError("");

    if (!email) return setSignEmailError("Please enter your email address");
    setSignEmailError("");

    if (!password) return setSignPasswordError("Please enter your password");
    setSignPasswordError("");

    if (!isPasswordValid) return setSignPasswordError("Invalid password.");
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
  };
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Create New Account</h2>

        <form className="auth-form" onSubmit={onSubmitHandler}>
          <p className="namesErr">{nameError}</p>
          <p className="emailErr">{signEmailError}</p>
          <p className="passwordErr">{signPasswordError}</p>
          <p className="repeatPasswordErr">{cormfirmPasswordError}</p>
          <div className="form-group">
            <label htmlFor="signupName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              value={values.fullname}
              onChange={handleChange}
              id="signupName"
              className="form-input"
              placeholder="munir ahmed"
              style={
                nameError.length > 0
                  ? { border: "1px solid  #991b1b" }
                  : { border: "1px solid #d1d5db" }
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="signupEmail" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              id="signupEmail"
              className="form-input"
              placeholder="munir@example.com"
              style={
                signEmailError.length > 0
                  ? { border: "1px solid  #991b1b" }
                  : { border: "1px solid #d1d5db" }
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="signupPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              id="signupPassword"
              className="form-input"
              placeholder="••••••••"
              style={
                signPasswordError.length > 0
                  ? { border: "1px solid  #991b1b" }
                  : { border: "1px solid #d1d5db" }
              }
            />
          </div>

          <div className={"passwordCheck"}>
            <div>
              <p className={"check"}>
                {isUpperCaseAdded(values.password) ? (
                  <IoMdCheckmark
                    style={{
                      color: "#00ff00",
                    }}
                  />
                ) : (
                  <IoCloseSharp
                    style={{
                      color: "#fc4747",
                    }}
                  />
                )}
                one capital letter
              </p>
              <p className={"check"}>
                {isLowerCaseAdded(values.password) ? (
                  <IoMdCheckmark
                    style={{
                      color: "#00ff00",
                    }}
                  />
                ) : (
                  <IoCloseSharp
                    style={{
                      color: "#fc4747",
                    }}
                  />
                )}
                one small letter
              </p>
              <p className={"check"}>
                {isLowerCaseAdded(values.password) &&
                isUpperCaseAdded(values.password) ? (
                  <IoMdCheckmark
                    style={{
                      color: "#00ff00",
                    }}
                  />
                ) : (
                  <IoCloseSharp
                    style={{
                      color: "#fc4747",
                    }}
                  />
                )}
                only Latin letters
              </p>
            </div>
            <div>
              <p className={"check"}>
                {isNumsAdded(values.password) ? (
                  <IoMdCheckmark
                    style={{
                      color: "#00ff00",
                      fontSize: "14px",
                      fontWeight: "bold",
                    }}
                  />
                ) : (
                  <IoCloseSharp
                    style={{
                      color: "#fc4747",
                    }}
                  />
                )}{" "}
                one digit
              </p>
              <p className={"check"}>
                {isSymbolsAdded(values.password) ? (
                  <IoMdCheckmark
                    style={{
                      color: "#00ff00",
                    }}
                  />
                ) : (
                  <IoCloseSharp
                    style={{
                      color: "#fc4747",
                    }}
                  />
                )}
                one symbol
              </p>
              <p className={"check"}>
                {isPasswordLengthOk ? (
                  <IoMdCheckmark
                    style={{
                      color: "#00ff00",
                    }}
                  />
                ) : (
                  <IoCloseSharp
                    style={{
                      color: "#fc4747",
                    }}
                  />
                )}
                use 6 or more
              </p>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="signupConfirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              id="signupConfirmPassword"
              className="form-input"
              placeholder="••••••••"
              style={
                cormfirmPasswordError.length > 0
                  ? { border: "1px solid  #991b1b" }
                  : { border: "1px solid #d1d5db" }
              }
            />
          </div>

          <button type="submit" className="auth-button primary">
            Create Account
          </button>

          <div className="auth-footer">
            Already have an account?
            <a href="#" className="auth-link">
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
