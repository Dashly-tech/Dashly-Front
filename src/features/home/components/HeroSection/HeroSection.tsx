import "./HeroSection.css";

export default function HeroSection() {
  const handleScroll = () => {
    const section = document.getElementById("menu");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="hero">
      <div className="hero__content">
        <span className="hero__badge reveal-up">Restorandan birbaşa sizə</span>

        <h1 className="hero__title reveal-up">
          Vasitəçini <span>aradan qaldır</span>
        </h1>

        <p className="hero__subtitle reveal-up">
          Daha sürətli. Daha ucuz. Daha ağıllı yemək sifarişi.

        </p>

        <button className="hero__btn reveal-up" onClick={handleScroll}>
          İndi sifarişə başla
        </button>
      </div>
    </section>
  );
}