import { Link } from "react-router-dom";
import CartButton from "../../shared/CartButton/CartButton";
import { useCartStore } from "../../../app/store/cart.store";
import { useUIStore } from "../../../app/store/ui.store";
import SearchBar from "../../shared/SearchBar/SearchBar";
import "./Navbar.css";
import LocationButton from "../../common/Button/LocationButton";

export default function Navbar() {
  const totalItems = useCartStore((state) => state.getTotalItems());
  const openCart = useUIStore((state) => state.openCart);

  return (
    <header className="navbar">
      <div className="navbar__container">

        <div className="navbar__top">
          {/* LOGO */}
          <Link to="/" className="navbar__brand">
            <div className="navbar__logo-box">
              <img
                src="/dashlyyy.svg"
                alt="Dashly logo"
                className="navbar__logo"
              />
            </div>

            <span className="navbar__brand-text">Dashly</span>
          </Link>

          {/* SEARCH (desktop) */}
          <div className="navbar__search navbar__search--desktop">
            <SearchBar />
          </div>

          {/* RIGHT */}
          <div className="navbar__right">
            <div className="navbar-location">
              <LocationButton />
            </div>
            <Link to="/restaurants" className="navbar__browse-btn">
              Browse Restaurants
            </Link>

            <CartButton count={totalItems} onClick={openCart} />
          </div>
        </div>

        {/* SEARCH (mobile) */}
        <div className="navbar__search navbar__search--mobile">
          <SearchBar />
          <div className="navbar-location_mobile">
            <LocationButton />
          </div>
        </div>

      </div>
    </header>
  );
}