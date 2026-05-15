import "./MenuFilters.css";



type Props = {
  active: string;
  onChange: (value: string) => void;
  categories:string[]
};

export default function MenuFilters({ active, onChange,categories }: Props) {
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