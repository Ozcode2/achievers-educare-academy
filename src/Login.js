import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useStateValue } from "./StateProvider";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to store the error message
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [{ user }, dispatch] = useStateValue();

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/local-exams");
      })
      .catch((error) => {
        setError(error.message);
        setShowErrorModal(true);
      });
  };

  const handleModalClose = () => {
    setShowErrorModal(false);
    navigate("/login");
  };

  const toRegisterPage = () => {
    navigate("/register");
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
    <div className="login">
      <Link to="/achievers-educare-academy">
        <img
          className="login__logo"
          alt="Achiever Logo"
          src={process.env.PUBLIC_URL + "/achievers.png"}
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <i
            className={`password-toggle-icon ${
              showPassword ? <FaEyeSlash /> : <FaEye />
            }`}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </i>

          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign in
          </button>
        </form>

        <p>
          <span className="login__forgotPassword">
            {
              <Link to="/recover-password" className="login__toRecoverPassword">
                Forgot your password?
              </Link>
            }
          </span>
        </p>

        <button className="login__registerButton" onClick={toRegisterPage}>
          Create your Achievers Account
        </button>
      </div>

      {showErrorModal && (
        <div className="error-modal">
          <div className="error-modal__content">
            <h2>Error</h2>
            <p>{error}</p>
            <button className="click" onClick={handleModalClose}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
