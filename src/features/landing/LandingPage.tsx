import { useNavigate } from "react-router-dom";
import "./landing.css";
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="landing_page_container">
      <h2 className="landing_page_title">Dashly</h2>
      <p className="landing_page_description">
        Sevimli yeməkləriniz indi daha sürətli
      </p>
      <div className="landing_page_buttons">
        <button
          className="view_all_button"
          onClick={() => navigate("/delivery-home")}
        >
            Restoran xarici sifariş
        </button>
        <button
          className="browse_dishes_button"
          onClick={() => navigate("/dishes")}
        >
           Restoran daxili sifariş
        </button>
        <button
          className="make_reservation_button"
          onClick={() => navigate("/reservation/restaurants")}
        >
          Rezervasiya et
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
