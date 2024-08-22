import "./Header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { useUser } from "./UserContext";
import { FaSearch } from "react-icons/fa";

const Header = ({ setSearchQuery }) => {
  const [{ user }, dispatch] = useStateValue();
  const { clearUserData } = useUser();
  const location = useLocation();
  const navigate = useNavigate();

  const handleAuthentication = async () => {
    if (user) {
      try {
        await auth.signOut();
        clearUserData();
        navigate("/login");
      } catch (error) {
        console.error("Sign out error: ", error);
      }
    }
  };

  const handleSearch = (event) => {
    // Check if the user is in the checkout route and prevent updating the search query
    if (!(location.pathname === "/about")) {
      setSearchQuery(event.target.value);
    }
  };

  return (
    <div className="header">
      <Link to="/achievers-educare-academy">
        <img
          src="/achievers.png"
          className="header_logo"
          width="100"
          height="100"
        />
      </Link>

      <div className="header_title">
        <h1>ACHIEVERS EDUCARE</h1>
        <span>...professionalism in our service</span>
      </div>

      <div className="header__search">
        <input
          type="search"
          placeholder="Search Achievers"
          className="header__searchInput"
          onChange={handleSearch}
        />
        <div className="header__icon">
          <FaSearch className="header__searchIcon" />
        </div>
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/about" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">About</span>
            <span className="header__optionLineTwo">Us</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
