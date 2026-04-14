import { Link } from "react-router-dom";
import CartButton from "../../shared/CartButton/CartButton";
import { useCartStore } from "../../../app/store/cart.store";
import { useUIStore } from "../../../app/store/ui.store";
import SearchBar from "../../shared/SearchBar/SearchBar";
import "./Navbar.css";

export default function Navbar() {
  const totalItems = useCartStore((state) => state.getTotalItems());
  const openCart = useUIStore((state) => state.openCart);

  return (
    <header className="navbar">
      <div className="navbar__container">
        <div className="navbar__top">
          <Link to="/" className="navbar__brand">
            <div className="navbar__logo-box">
              <img
                src="https://i.postimg.cc/KY7jPfrS/ddddd.jpg"
                alt="Dashly logo"
                className="navbar__logo"
              />
            </div>

            <span className="navbar__brand-text">Dashly</span>
          </Link>

          <div className="navbar__search navbar__search--desktop">
            <SearchBar />
          </div>

          <div className="navbar__right">
            <Link to="/restaurants" className="navbar__browse-btn">
              Browse Restaurants
            </Link>

            <CartButton count={totalItems} onClick={openCart} />
          </div>
        </div>

        <div className="navbar__search navbar__search--mobile">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}