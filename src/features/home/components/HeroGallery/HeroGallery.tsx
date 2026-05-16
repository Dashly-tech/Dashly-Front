import { useState } from "react";
import "./HeroGallery.css";

const aboutItems = [
  {
    id: 1,
    title: "Birbaşa restoran sifarişləri",
text: "Müştərilər restoranların xüsusi WhatsApp sistemi vasitəsilə sifarişlərini birbaşa göndərirlər.",

  },
  {
    id: 2,
    title: "Daha sərfəli qiymətlər",
    text: "Daha az vasitəçi daha şəffaf qiymətlər və həm müştərilər, həm də restoran sahibləri üçün daha yaxşı üstünlüklər yaradır.",
    },
    {
    id: 3,
    title: "Daha sürətli əlaqə",
    text: "Sifarişlər, qeydlər və çatdırılma məlumatları daha sürətli və aydın şəkildə ötürülür, bu da ümumi sifariş təcrübəsini yaxşılaşdırır.",
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
          Müştəriləri restoranlarla birləşdirən daha ağıllı yol
          </h2>

          <p className="about-dropdown__description">
          Dashly istifadəçilərə restoranları kəşf etməyə, menyulara baxmağa və sifarişləri lazımsız vasitəçilər olmadan birbaşa göndərməyə kömək edir.
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