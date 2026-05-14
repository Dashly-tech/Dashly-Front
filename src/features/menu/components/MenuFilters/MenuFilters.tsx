import "./MenuFilters.css";

const categories = ["All", "Burgers", "Sushi", "Fırın", "Desserts","Döner"];

type Props = {
  active: string;
  onChange: (value: string) => void;
};

export default function MenuFilters({ active, onChange }: Props) {
  return (
    <div className="menu-filters">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`menu-filters__btn ${
            active === cat ? "menu-filters__btn--active" : ""
          }`}
          onClick={() => onChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}