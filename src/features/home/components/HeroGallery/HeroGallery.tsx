import "./HeroGallery.css";

export default function HeroGallery() {
  return (
    <section className="about-highlight">
      <div className="about-highlight__container">
        <div className="about-highlight__intro">
          <span className="about-highlight__badge">Why Dashly</span>

          <h2 className="about-highlight__title">
            A smarter way to connect customers with restaurants
          </h2>

          <p className="about-highlight__description">
            Dashly helps users discover restaurants, explore menus, and send
            orders directly without unnecessary middlemen. It is faster, more
            personal, and better for both sides.
          </p>
        </div>

        <div className="about-highlight__grid">
          <article className="about-highlight__card about-highlight__card--orange">
            <span className="about-highlight__card-number">01</span>
            <h3 className="about-highlight__card-title">Direct restaurant orders</h3>
            <p className="about-highlight__card-text">
              Customers place orders directly with restaurants through their own
              dedicated WhatsApp flow.
            </p>
          </article>

          <article className="about-highlight__card about-highlight__card--purple">
            <span className="about-highlight__card-number">02</span>
            <h3 className="about-highlight__card-title">Better prices</h3>
            <p className="about-highlight__card-text">
              Fewer middle layers means more transparent pricing and better value
              for both customers and restaurant owners.
            </p>
          </article>

          <article className="about-highlight__card about-highlight__card--green">
            <span className="about-highlight__card-number">03</span>
            <h3 className="about-highlight__card-title">Faster communication</h3>
            <p className="about-highlight__card-text">
              Orders, notes, and delivery details move quickly and clearly, which
              improves the overall ordering experience.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}