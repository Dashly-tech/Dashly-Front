import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useRestaurantStore } from "../../../app/store/restaurant.store";
import { useMenuStore } from "../../../app/store/menu.store";
import "./SearchBar.css";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const { restaurants, fetchRestaurants } = useRestaurantStore();
  const { menu, fetchMenu } = useMenuStore();

  useEffect(() => {
    fetchRestaurants();
    fetchMenu();
  }, []);

  const restaurantResults = restaurants.filter((r) =>
    r.name.toLowerCase().includes(query.toLowerCase())
  );

  const foodResults = menu.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search">
      <div className="search__input-wrapper">
        <HiOutlineMagnifyingGlass size={18} className="search__icon" />

        <input
          type="text"
          placeholder="Restoran və ya yemək axtarın..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search__input"
        />
      </div>

      {query && (
        <div className="search__results">
          {restaurantResults.length > 0 && (
            <div className="search__section">
              <p className="search__section-title">Restoranlar</p>

              {restaurantResults.map((r) => (
                <Link
                  key={r.id}
                  to={{ pathname: `/restaurants/${r.slug}`, search: "" }}
                  className="search__item"
                >
                  <img src={r.logo} className="search__thumb" />
                  <div>
                    <p>{r.name}</p>
                    <span>{r.locationText}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {foodResults.length > 0 && (
            <div className="search__section">
              <p className="search__section-title">Yeməklər</p>

              {foodResults.map((item) => {
                const restaurant = restaurants.find((r) => r.id === item.restaurantId);
                return (
                  <Link
                    key={item.id}
                    className="search__item"
                    to={{
                      pathname: `/restaurants/${restaurant?.slug}`,
                      search: `?FOODS=${item.name}`,
                    }}
                  >
                    <img src={item.image} className="search__thumb" />
                    <div>
                      <p>{item.name}</p>
                      <span>{restaurant?.name}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

          {restaurantResults.length === 0 && foodResults.length === 0 && (
            <p className="search__empty">Məlumat tapılmadı</p>
          )}
        </div>
      )}
    </div>
  );
}