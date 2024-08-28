import React from "react";
import "./international.css";
import Product from "./Product";

const International = ({ searchQuery }) => {
  const products = [
    {
      id: "46551172",
      title: "IELTS TUTORIAL",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGTLV48JuaSJPNrgknuL-mANMOHl7EXTCAtQ&s",
    },
    {
      id: "92558477",
      title: "SAT TUTORIAL",
      image:
        "https://static.wixstatic.com/media/a0a312_065eeb17f34a4732bf95b14e10b670a3~mv2.png/v1/fill/w_585,h_542,al_c,q_85,enc_auto/a0a312_065eeb17f34a4732bf95b14e10b670a3~mv2.png",
    },
    {
      id: "46153469",
      title: "TOEFL TUTORIAL",
      image:
        "https://5.imimg.com/data5/DA/RT/GLADMIN-35137012/toefl-training-course-500x500.png",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="international-page">
      <div className="page__row">
        {filteredProducts.length > 0
          ? filteredProducts.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
              />
            ))
          : products.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
              />
            ))}
      </div>
    </div>
  );
};

export default International;
