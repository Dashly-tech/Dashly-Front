import { useState } from "react";
import "./HeroGallery.css";

const aboutItems = [
  {
    id: 1,
    title: "Direct restaurant orders",
    text: "Customers place orders directly with restaurants through their own dedicated WhatsApp flow.",
  },
  {
    id: 2,
    title: "Better prices",
    text: "Fewer middle layers means more transparent pricing and better value for both customers and restaurant owners.",
  },
  {
    id: 3,
    title: "Faster communication",
    text: "Orders, notes, and delivery details move quickly and clearly, which improves the overall ordering experience.",
  },
];

export default function HeroGallery() {
  const [openId, setOpenId] = useState<number | null>(1);

  const handleToggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="about-dropdown">
      <div className="about-dropdown__container">
        <div className="about-dropdown__intro">
          <span className="about-dropdown__badge">Why Dashly</span>

          <h2 className="about-dropdown__title">
            A smarter way to connect customers with restaurants
          </h2>

          <p className="about-dropdown__description">
            Dashly helps users discover restaurants, explore menus, and send
            orders directly without unnecessary middlemen.
          </p>
        </div>

        <div className="about-dropdown__box">
          {aboutItems.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`about-dropdown__item ${isOpen ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  className="about-dropdown__trigger"
                  onClick={() => handleToggle(item.id)}
                >
                  <span className="about-dropdown__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="about-dropdown__item-title">
                    {item.title}
                  </span>

                  <span className="about-dropdown__icon">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="about-dropdown__content">
                    <p>{item.text}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}