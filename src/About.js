import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about_container">
        <img
          className="about_image"
          src={process.env.PUBLIC_URL + "/Femi.png"}
          alt="Femi"
        ></img>
        <h1 className="about_name">Mr. Femi Ajetunmobi Bethel, CEO.</h1>
        <p className="about_info">
          "Achievers Educare Academy: Empowering students to reach their full
          potential with personalized learning and expert guidance!"
        </p>
        <p className="about_info">
          "Unlock your academic success with Achievers Educare Academy—where
          excellence meets dedication in every lesson!"
        </p>
        <p className="about_info">
          "Join Achievers Educare Academy today and experience transformative
          learning that paves the way to your academic goals!"
        </p>
        <p className="about_info">
          "At Achievers Educare Academy, we believe every student has the power
          to succeed. Let us help you discover yours!"
        </p>
        <p className="about_info">
          "Achievers Educare Academy: Your partner in education, committed to
          delivering top-notch tutoring that drives results!"
        </p>
      </div>
    </div>
  );
};

export default About;
