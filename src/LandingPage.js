import React from "react";
import "./LandingPage.css";
import Product from "./Product";

const LandingPage = ({ searchQuery }) => {
  const products = [
    {
      id: "12321341",
      title: "JAMB TUTORIAL",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Official_JAMB_logo.png/220px-Official_JAMB_logo.png",
    },
    {
      id: "54361741",
      title: "NECO TUTORIAL",
      image:
        "https://pbs.twimg.com/profile_images/1751494800648335360/EsxTO7Qb_200x200.jpg",
    },
    {
      id: "36365134",
      title: "WAEC & GCE TUTORIAL",
      image:
        "https://play-lh.googleusercontent.com/xFa1pORFN4rZQYOS4IrDQCSBAhcJuEFHmNhmY_hmCyAj6WORGwV1N3fdi8rT93tNjw",
    },
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
    {
      id: "34765226",
      title: "JUPEB TUTORIAL",
      image:
        "https://lasu.edu.ng/admissionletter-portal/jupeb/images/jupeblogo.png",
    },
    {
      id: "13477431",
      title: "IJMB TUTORIAL",
      image:
        "https://ijmb.com.ng/wp-content/uploads/2018/04/IJMB-website-LOGO.jpg",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="landing-page">
      <div className="home__row">
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

export default LandingPage;
