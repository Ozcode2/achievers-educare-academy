import React, { useState } from "react";
import "./RecoverPassword.css";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

const RecoverPassword = () => {
  const [email, setEmail] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const resetPassword = (e) => {
    e.preventDefault();

    if (email) {
      auth
        .sendPasswordResetEmail(email)
        .then((auth) => {
          alert("Password reset email sent. Please check your email.");
        })
        .catch((error) => {
          console.error("Password reset error:", error);
          alert(error.message);
        });
    } else {
      alert("Please enter your email address to reset your password.");
    }
  };

  return (
    <div className="recoverPassword">
      <Link to="/achievers-educare-academy">
        <img
          className="recoverPassword__logo"
          src={process.env.PUBLIC_URL + "/achievers.png"}
          alt="Achievers Logo"
        />
      </Link>

      <div className="recoverPassword__container">
        <h1>Password assistance</h1>
        <span className="recoverPassword__info">
          Enter the email address associated with your Achievers account.
        </span>

        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            className="recoverPassword__signInButton"
            type="submit"
            onClick={resetPassword}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecoverPassword;
