import { FaArrowRight } from "react-icons/fa";
import Button from "../button/Button ";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="dine-hero">
      <div className="glow-blur"></div>
      <div className="dine-hero-content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="24"
          viewBox="0 0 24 24"
          fill="#FF8A3D"
          stroke="#FF8A3D"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-star w-4 h-4 text-[#FF8A3D] fill-[#FF8A3D]"
          data-fg-eh6d9="1.17:1.3588:/src/app/components/Hero.tsx:16:13:765:58:e:Star::::::hX0"
          data-fgid-eh6d9=":rq:"
        >
          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
        </svg>
        Ən sürətli çatdırılma xidmət
      </div>
      <div className="dine-hero-text">
        <h2 className="dine-hero-title">
          Sevimli yeməkləriniz <span>indi daha sürətli</span>
        </h2>
        <p className="dine-hero-description">
          Bakının ən yaxşı restoranlarından yeməklərinizi 30 dəqiqə ərzində
          qapınıza çatdırırıq
        </p>
      </div>
      <div className="dine-hero-buttons">
        <Button size="lg" variant="primary">
          Sifariş ver <FaArrowRight color="white" />
        </Button>
        <Button size="lg" variant="tertiary">
          Restoranları gör
        </Button>
      </div>
      <div className="dine-hero-stats">
        <div className="dine-hero-stat">
          <div className="dine-hero-stat-value">500+</div>
          <div className="dine-hero-stat-label">Restoran</div>
        </div>
        <div className="dine-hero-stat">
          <div className="dine-hero-stat-value">30 dəq</div>
          <div className="dine-hero-stat-label">Çatdırılma</div>
        </div>
        <div className="dine-hero-stat">
          <div className="dine-hero-stat-value">50K+</div>
          <div className="dine-hero-stat-label">Xoşbəxt müştəri</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
