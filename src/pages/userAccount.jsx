import { useEffect, useState } from "react";
import "../uniqueStyles/userAccount.css";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import {
  isLowerCaseAdded,
  isNumsAdded,
  isSymbolsAdded,
  isUpperCaseAdded,
} from "../services/passwordStrength/passwordStrength";

const UserAccount = () => {
  const [logedInUser, setLogedInUser] = useState({});
  const [profilePic, setProfilePic] = useState("");

  const [values, setValues] = useState({
    fullName: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

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

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData") || "[]");

    const loggedInUser = userData.find(
      (user) =>
        user.accountID ===
        "codes@gmail.com7.0669923995466562025-05-28T04:53:14.405Z"
    );
    if (loggedInUser) {
      setLogedInUser(loggedInUser);
    }
  }, []);
  const firstName = logedInUser.fullname?.split(" ")[0] || "";
  const lastName = logedInUser.fullname?.split(" ")[1] || "";

  const uploadPhotoTrigger = () => {
    const imageInput = document.getElementById("uploadImage");
    imageInput.click();
  };
  const uploadPhotoHandler = (e) => {
    const ImgObj = e.target.files[0];
    if (ImgObj) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imgData = e.target.result;
        setProfilePic(imgData);

        const accounts = JSON.parse(localStorage.getItem("userData")) || [];
        const updatedAccounts = accounts.map((account) => {
          if (account.accountID === logedInUser.accountID) {
            return { ...account, profilePic: imgData };
          }
          return account;
        });
        localStorage.setItem("userData", JSON.stringify(updatedAccounts));
      };
      reader.readAsDataURL(ImgObj);
    }
  };

  useEffect(() => {
    const accounts = JSON.parse(localStorage.getItem("userData") || "[]");
    const currentUser = accounts.find(
      (ac) => ac.accountID === logedInUser.accountID
    );
    if (currentUser?.profilePic) {
      setProfilePic(currentUser.profilePic);
    }
  }, []);

  const profileLength = profilePic?.length;

  const onsubmitHandler = (e) => {
    e.preventDefault();
    if (!values.fullName) return alert("input full name");

    if (!values.email) return alert("please input email");
    if (!values.password) return alert("Please input password");

    if (!values.repeatPassword) return alert("please input repeat password");

    const accounts = JSON.parse(localStorage.getItem("userData"));
    console.log(accounts);
    if (!isPasswordValid) return alert("invalid password");
    if (values.password !== values.repeatPassword)
      return alert("Passwords do not match");

    const updatedAccounts = accounts.map((account) => {
      if (account.accountID === logedInUser.accountID) {
        return {
          ...account,
          fullname: values.fullName,
          email: values.email,
          password: values.password,
        };
      }
      return account;
    });

    setLogedInUser((account) => ({
      ...account,
      fullname: values.fullName,
    }));
    localStorage.setItem("userData", JSON.stringify(updatedAccounts));
  };

  return (
    <div className="account-container">
      <h2 className="account-title">My Account</h2>

      <div className="profile-section">
        <div className="profile-picture-container">
          {!profileLength ? (
            <div className="profile-pic">
              <h2>{firstName[0]?.toUpperCase()}</h2>
              <h2>{lastName[0]?.toUpperCase()}</h2>
            </div>
          ) : (
            <img
              className={"profileImg"}
              src={profilePic}
              alt="face of the user"
            />
          )}

          <button className="change-photo-button" onClick={uploadPhotoTrigger}>
            Change Photo
          </button>
        </div>

        <input
          onChange={uploadPhotoHandler}
          style={{ display: "none" }}
          id="uploadImage"
          type="file"
          accept="image/*"
        />

        <form className="account-form" onSubmit={onsubmitHandler}>
          <div className="form-group">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
              id="fullName"
              className="form-input"
              placeholder="munir ahmed"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              id="email"
              className="form-input"
              placeholder="munir@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              New Password
            </label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              id="password"
              className="form-input"
              placeholder="••••••••"
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
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              name="repeatPassword"
              value={values.repeatPassword}
              onChange={handleChange}
              id="confirmPassword"
              className="form-input"
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="form-button primary">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserAccount;
