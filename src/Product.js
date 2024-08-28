import React, { useState } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";

const Product = ({ id, title, image }) => {
  const [{ user }] = useStateValue();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEnrollClick = () => {
    if (!user) {
      setIsModalOpen(true);
      return;
    }
    const phoneNumber = "2348071342141";
    const message = `Hello, I am interested in enrolling for the course: ${title}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank"); // Opens the WhatsApp link in a new tab
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate("/login"); // Optionally, redirect to the login page
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title.length < 10 ? title : `${title.slice(0, 40)}...`}</p>
      </div>
      <img src={image} alt="" />
      <button onClick={handleEnrollClick}>Enroll</button>

      {isModalOpen && (
        <div className="show-modal">
          <div className="show-modal__content">
            <h2>Alert!</h2>
            <p>Please sign in to enroll for the course.</p>
            <button className="press" onClick={handleCloseModal}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
