import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="navbar__logo-box">
              <img
              src="/dashlyyy.svg"
              alt="Dashly logo"
              className="footer__logo"
            />
            </div>

            <div>
              <h3 className="footer__brand-title">Dashly</h3>
              <p className="footer__brand-text">
                Direct food ordering experience with a faster, smarter, and more
                personal touch.
              </p>
            </div>
          <div className="footer__socials">
  <a href="mailto:dashly.fast@gmail.com">
    <MdEmail />
  </a>

  <a href="https://www.instagram.com/dashly.fast/" target="_blank">
    <FaInstagram />
  </a>

  <a href="https://www.tiktok.com/@dashly.fast?is_from_webapp=1&sender_device=pc" target="_blank">
    <FaTiktok />
  </a>
</div>
          </div>

          <div className="footer__columns">
            <div className="footer__column">
              <h4 className="footer__heading">Quick Links</h4>
              <ul className="footer__list">
                <li><a href="#menu">Menu</a></li>
                <li><a href="#menu">Order Now</a></li>
                <li><a href="#menu">Popular Items</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__heading">Contact</h4>
              <ul className="footer__list">
                <li><a href="tel:+994501234567">+994 ###########</a></li>
                <li><a href="mailto:hello@dashly.az">dashly.fast@gmail.com</a></li>
                <li>Baku, Azerbaijan</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 Dashly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}