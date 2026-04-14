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
        <span className="hero__badge reveal-up">Direct from restaurant to you</span>

        <h1 className="hero__title reveal-up">
          Skip the <span>Middleman</span>
        </h1>

        <p className="hero__subtitle reveal-up">
          Faster. Cheaper. Smarter food ordering.
        </p>

        <button className="hero__btn reveal-up" onClick={handleScroll}>
          Start Ordering Now
        </button>
      </div>
    </section>
  );
}