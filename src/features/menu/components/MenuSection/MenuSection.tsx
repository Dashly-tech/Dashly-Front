import { useState } from "react";
import MenuFilters from "../MenuFilters/MenuFilters";
import MenuGrid from "../MenuGrid/MenuGrid";
import useReveal from "../../hooks/useReveal";
import "./MenuSection.css";

export default function MenuSection() {
  const [category, setCategory] = useState("All");
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      id="menu"
      ref={ref}
      className={`menu-section reveal-on-scroll ${isVisible ? "is-visible" : ""}`}
    >
      <div className="menu-section__container">
        <h2 className="menu-section__title">Premium Menu</h2>

        <MenuFilters active={category} onChange={setCategory} />
        <MenuGrid category={category} />
      </div>
    </section>
  );
}