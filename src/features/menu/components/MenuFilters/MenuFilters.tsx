import "./MenuFilters.css";

const categories = ["All", "Pizza", "Burgers", "Sushi", "Pasta", "Desserts","Kampanyalar"];

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