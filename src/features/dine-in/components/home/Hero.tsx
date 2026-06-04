// import { FaArrowRight } from "react-icons/fa";
// import Button from "../button/Button ";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="dine-hero">
      <div className="glow-blur"></div>
      <div className="dine-hero-text">
        <h2 className="dine-hero-title">
          Restoran daxilində <span>QR kodu skan edərək asanlıqla sifariş verə bilərsiniz.</span>
        </h2>
      </div>
      {/* <div className="dine-hero-buttons">
        <Button size="lg" variant="primary">
          Sifariş ver <FaArrowRight color="white" />
        </Button>
        <Button size="lg" variant="tertiary">
          Restoranları gör
        </Button>
      </div> */}

    </div>
  );
};

export default Hero;
