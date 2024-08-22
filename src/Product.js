import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";


const Product = ({ id, title, image }) => {
  const [{ user }] = useStateValue();
  const navigate = useNavigate();

  const handleEnrollClick = () => {

    if (!user) {
      // Show an alert if the user is not signed in
      alert("Please sign in to enroll in the course.");
      navigate("/login"); // Optionally, redirect to the login page
      return;
    }
    // const phoneNumber = "2348071342141";
    const phoneNumber = "2348162066733";
    const message = `Hello, I am interested in enrolling for the course: ${title}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank"); // Opens the WhatsApp link in a new tab
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title.length < 10 ? title : `${title.slice(0, 40)}...`}</p>
      </div>
      <img src={image} alt="" />
      <button onClick={handleEnrollClick}>Enroll</button>
    </div>
  );
};

export default Product;
