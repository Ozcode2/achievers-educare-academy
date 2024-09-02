import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

  return (
    <div className="home">
      <Slider {...settings}>
        <div className="home_wrap">
          <img
            className="home__image"
            alt="cbt"
            src={`${process.env.PUBLIC_URL}/edit1.png`}
          />
        </div>
        <div className="home_wrap">
          <img
            className="home__imageOne"
            alt="class"
            src={`${process.env.PUBLIC_URL}/edit2.png`}
          />
        </div>
        <div className="home_wrap">
          <img
            className="home__imageTwo"
            alt="school"
            src={`${process.env.PUBLIC_URL}/edit3.png`}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Home;
