import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useRestaurantStore } from "../../../../app/store/restaurant.store";
import { Link } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const { restaurants, fetchRestaurants } = useRestaurantStore();
  useEffect(() => {
    fetchRestaurants();
  }, []);

   const filterRestaurnat = restaurants.filter((item)=>item.name !== "Mangal döner")
  const restaurantResults = filterRestaurnat.filter((r) =>
    r.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search">

      <div className="search-container">
        <IoSearchOutline className="search-icon" />
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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
                  to={{ pathname: `/dineinrestaurants/${r.slug}`, search: "" }}
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

      

          {restaurantResults.length === 0  && (
            <p className="search__empty">Məlumat tapılmadı</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;