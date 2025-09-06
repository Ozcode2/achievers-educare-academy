import React from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const toLandingPage = () => {
    navigate("/local-exams");
  };

  const toInternationalPage = () => {
    navigate("/international-exams");
  };
  return (
    <div className="homePage">
      <div className="homePage__row">
        <div className="service">
          <div className="service__info">
            <p>International Exams</p>
          </div>
          <img src={process.env.PUBLIC_URL + "/international.png"} alt="" />
          <button onClick={toInternationalPage}>View</button>
        </div>
        <div className="service">
          <div className="service__info">
            <p>Local Exams</p>
          </div>
          <img src={process.env.PUBLIC_URL + "/school.png"} alt="" />
          <button onClick={toLandingPage}>View</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
