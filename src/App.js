import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import RecoverPassword from "./RecoverPassword";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import React, { useEffect, useState } from "react";
import LandingPage from "./LandingPage";
import About from "./About";
import HomePage from "./HomePage";
import International from "./International";
import Confetti from "react-confetti";
import "./App.css";

function App() {
  const [{}, dispatch] = useStateValue();
  const [searchQuery, setSearchQuery] = useState("");
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {showConfetti && (
        <div className="confetti-container">
          <Confetti />
        </div>
      )}
      <Routes>
        <Route
          exact
          path="/achievers-educare-academy"
          element={
            <React.Fragment>
              <Header />
              <Home />
              <HomePage />
              <Footer />
            </React.Fragment>
          }
        />

        <Route
          path="/local-exams"
          element={
            <React.Fragment>
              <Header setSearchQuery={setSearchQuery} />
              <Home />
              <LandingPage searchQuery={searchQuery} />
              <Footer />
            </React.Fragment>
          }
        />

        <Route
          path="/international-exams"
          element={
            <React.Fragment>
              <Header setSearchQuery={setSearchQuery} />
              <Home />
              <International searchQuery={searchQuery} />
              <Footer />
            </React.Fragment>
          }
        />

        <Route
          path="/about"
          element={
            <React.Fragment>
              <Header />
              <About />
              <Footer />
            </React.Fragment>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recover-password" element={<RecoverPassword />} />
      </Routes>
    </div>
  );
}

export default App;
