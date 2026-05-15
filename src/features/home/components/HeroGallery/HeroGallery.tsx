import { useState } from "react";
import "./HeroGallery.css";

const aboutItems = [
  {
    id: 1,
    title: "Birbaşa restoran sifarişləri",
    text: "Müştərilər sifarişlərini restoranın öz WhatsApp axını vasitəsilə birbaşa verir."
  },
  {
    id: 2,
    title: "Daha sərfəli qiymətlər",
    text: "Arada daha az vasitəçi olduğu üçün qiymətlər daha şəffafdır və həm müştərilər, həm də restoran sahibləri üçün daha sərfəlidir."
  },
  {
    id: 3,
    title: "Daha sürətli əlaqə",
    text: "Sifarişlər, qeydlər və çatdırılma detalları daha tez və aydın ötürülür, bu da ümumi sifariş təcrübəsini yaxşılaşdırır."
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
          <span className="about-dropdown__badge">Niyə Dashly</span>

          <h2 className="about-dropdown__title">
          Müştəriləri restoranlarla daha ağıllı şəkildə birləşdirmə yolu

          </h2>

          <p className="about-dropdown__description">
            Dashly istifadəçilərə restoranları kəşf etməyə, menyulara baxmağa 
            və sifarişləri əlavə vasitəçilər olmadan birbaşa göndərməyə kömək edir.

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