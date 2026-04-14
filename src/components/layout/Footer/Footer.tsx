import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="navbar__logo-box">
              <img
                src="https://i.postimg.cc/KY7jPfrS/ddddd.jpg"
                alt="Dashly logo"
                className="navbar__logo"
              />
            </div>

            <div>
              <h3 className="footer__brand-title">Dashly</h3>
              <p className="footer__brand-text">
                Direct food ordering experience with a faster, smarter, and more
                personal touch.
              </p>
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
                <li><a href="tel:+994501234567">+994 50 123 45 67</a></li>
                <li><a href="mailto:hello@dashly.az">hello@dashly.az</a></li>
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