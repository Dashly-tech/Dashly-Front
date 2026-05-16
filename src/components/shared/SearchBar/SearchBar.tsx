import { useState } from "react";
import { mockRestaurants } from "../../../data/mockRestaurant";
import { mockMenu } from "../../../data/mockMenu";
import { Link } from "react-router-dom";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import "./SearchBar.css";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const restaurantResults = mockRestaurants.filter((r) =>
    r.name.toLowerCase().includes(query.toLowerCase())
  );

  const foodResults = mockMenu.filter((item) =>
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
          {/* RESTAURANTS */}
          {restaurantResults.length > 0 && (
            <div className="search__section">
              <p className="search__section-title">Restoranlar</p>

              {restaurantResults.map((r) => (
                <Link
                  key={r.id}
                  to={`/restaurants/${r.slug}`}
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

          {/* FOODS */}
          {foodResults.length > 0 && (
            <div className="search__section">
              <p className="search__section-title">Yeməklər</p>

              {foodResults.map((item) => {
                const restaurant =mockRestaurants.find(
                  (r) => r.id === item.restaurantId
                );

                return (
                  <Link
                    key={item.id}
                    to={`/restaurants/${restaurant?.slug}`}
                    className="search__item"
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