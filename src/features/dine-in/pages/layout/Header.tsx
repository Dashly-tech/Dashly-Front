import "./header.css";
import HeaderRight from "./HeaderRight";

export default function Navbar() {
  return (
    <header className="header">
      <div className="header__container">
        <div>
          <h2 className="header__logo">Dashly</h2>
        </div>
        <div>
          <HeaderRight />
        </div>
      </div>
    </header>
  );
}
