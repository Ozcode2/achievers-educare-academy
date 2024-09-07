import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "./firebase";
import { FaInfo } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reEnteredPassword, setReEnteredPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [error, setError] = useState(""); // State to store the error message
  const [showErrorModal, setShowErrorModal] = useState(false);

  const validatePassword = (password) => {
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters");
      setPasswordError(true);
      return false;
    }
    setErrorMessage("");
    setPasswordError(false);
    return true;
  };

  const register = (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      return;
    }

    if (password !== reEnteredPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/local-exams");
        }
      })
      .catch((error) => {
        setError(error.message);
        setShowErrorModal(true);
      });
  };

  const handleModalClose = () => {
    setShowErrorModal(false);
    navigate("/register");
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(false);
  };

  const [showPassword, setShowPassword] = useState(false); // State to show/hide password

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const [displayPassword, setDisplayPassword] = useState(false); // State to show/hide password

  const togglePasswordDisplay = () => {
    setDisplayPassword((prevDisplayPassword) => !prevDisplayPassword);
  };

  return (
    <div className="register">
      <Link to="/">
        <img
          className="register__logo"
          src={process.env.PUBLIC_URL + "/achievers.png"}
          alt="Achievers Logo"
        />
      </Link>

      <div className="register__container">
        <h1>Create account</h1>

        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type={displayPassword ? "text" : "password"}
            placeholder="At least 6 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={handlePasswordFocus}
            onBlur={handlePasswordBlur}
            style={{
              border: passwordError ? "2px solid brown" : "1px solid #9f9d9d",
              outline:
                passwordError && isPasswordFocused ? "3px solid pink" : "none",
            }}
          />

          <i
            className={`password-toggle-icon ${
              showPassword ? <FaEyeSlash /> : <FaEye />
            }`}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </i>

          {passwordError && (
            <p className="password__error">
              <i>!</i>
              {errorMessage}
            </p>
          )}
          {!passwordError && ( // Conditionally render password info
            <span className="password__info">
              <FaInfo className="password__infoIcon" /> must be at least 6
              characters.
            </span>
          )}

          <h5>Re-enter Password</h5>
          <input
            type={displayPassword ? "text" : "password"}
            value={reEnteredPassword}
            onChange={(e) => setReEnteredPassword(e.target.value)}
            onFocus={handlePasswordFocus}
            onBlur={handlePasswordBlur}
            style={{
              border: passwordError ? "2px solid brown" : "1px solid #9f9d9d",
              outline:
                passwordError && isPasswordFocused ? "3px solid pink" : "none",
            }}
          />

          <i
            className={`password-toggle-icon ${
              showPassword ? <FaEyeSlash /> : <FaEye />
            }`}
            onClick={togglePasswordDisplay}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </i>

          {errorMessage && (
            <p className="error__message">
              <i>!</i>
              {errorMessage}
            </p>
          )}

          <button
            className="login__signInButton"
            type="submit"
            onClick={register}
          >
            Create your Account
          </button>
        </form>

        <p>
          By signing-up you agree to Achievers condition of use.Please see our
          Privacy Notice, our Cookies Notice and our Interest-based Ads Notice.
        </p>
        <p>
          Already have an account?
          {
            <Link to="/login" className="register__toLogin">
              Sign in
            </Link>
          }
        </p>
      </div>
      {showErrorModal && (
        <div className="errors-modal">
          <div className="error-modal__content">
            <h2>Error</h2>
            <p>{error}</p>
            <button className="clicks" onClick={handleModalClose}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
