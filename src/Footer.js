import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FaFacebookF, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const today = new Date();

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer__socialMedia">
          <a href="/" target="_blank" rel="noreferrer">
            <div className="footer__x">
              <FontAwesomeIcon
                className="footer__socialIcon"
                icon={faXTwitter}
              />
            </div>
          </a>

          <a
            href="https://www.instagram.com/achievers_educare_academy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noreferrer"
          >
            <div className="footer__x">
              <FontAwesomeIcon
                className="footer__socialIcon"
                icon={faInstagram}
              />
            </div>
          </a>

          <a href="/" target="_blank" rel="noreferrer">
            <div className="footer__x">
              <img
                height={20}
                width={20}
                src="https://img.icons8.com/fluency-systems-filled/ff4500/telegram-app.png"
                alt="telegram-app"
                className="footer__socialIcon"
              />
            </div>
          </a>

          <a href="/" target="_blank" rel="noreferrer">
            <div className="footer__x">
              <FaFacebookF className="footer__socialIcon" />
            </div>
          </a>

          <a
            href="https://www.tiktok.com/@achievers_academy1?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noreferrer"
          >
            <div className="footer__x">
              <FaTiktok className="footer__socialIcon" />
            </div>
          </a>
        </div>
        <p className="copyright">
          Copyright Achievers Educare Academy &copy; {today.getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
