import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

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
  };
  
  return (
    <div className="home">
      <Slider {...settings}>
        <div className="home_wrap">
          <img
            className="home__image"
            alt=""
            src={process.env.PUBLIC_URL + "/cbt.png"}
          />
          <div className="imageOne">
            <h1 className="home__imageText">
              INTENSE CBTs<i>...</i>
            </h1>
            <span className="home__textBlock">
              We provide top-notch technical facilities
            </span>
            <span className="home__textBlock">
              to enable our<i id="key">jambites</i>
            </span>
            <span className="home__textBlock">
              have hands-on experience before their exams.
            </span>
            <Link to="/login">
              <button className="sign-up" disabled>
                Sign-in To get Full Experience
              </button>
            </Link>
          </div>
        </div>
        <div className="home_wrap">
          <img
            className="home__imageOne"
            alt=""
            src={process.env.PUBLIC_URL + "/class.png"}
          />
          <div className="imageOne">
            <h1 className="home__imageTextOne">
              IDEAL CLASSROOMS<i>...</i>
            </h1>
            <span className="home__textBlock">
              We possess well ventilated and
            </span>
            <span className="home__textBlock">
              conducive classrooms to enable
            </span>
            <span className="home__textBlock">
              our<i>students</i> learn in good conditions.
            </span>
            <Link to="/login">
              <button className="sign-up" disabled>
                Sign-in To get Full Experience
              </button>
            </Link>
          </div>
        </div>
        <div className="home_wrap">
          <img
            className="home__imageTwo"
            alt=""
            src={process.env.PUBLIC_URL + "/venue.png"}
          />
          <div className="imageOne">
            <h1 className="home__imageTextTwo">
              QUALIFIED TUTORS<i>...</i>
            </h1>
            <span className="home__textBlock">
              Our Tutors are certified<i>scholars</i>
            </span>
            <span className="home__textBlock">with lots of experience</span>
            <span className="home__textBlock">
              coupled with the passion to teach.
            </span>
            <Link to="/login">
              <button className="sign-up" disabled>
                Sign-in To get Full Experience
              </button>
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Home;
