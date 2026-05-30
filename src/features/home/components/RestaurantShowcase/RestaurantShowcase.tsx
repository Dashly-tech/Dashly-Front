import { useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "../../../../components/shared/RestaurantCard/RestaurantCard";
import { useRestaurantStore } from "../../../../app/store/restaurant.store";
import "./RestaurantShowcase.css";

export default function RestaurantShowcase() {
  const { restaurants, fetchRestaurants } = useRestaurantStore();

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const featured = restaurants.filter((r) => r.isFeatured);

  return (
    <section className="restaurant-showcase">
      <div className="restaurant-showcase__container">
        <div className="restaurant-showcase__header">
          <h2>Populyar Restoranlar</h2>

          <Link to="/restaurants" className="restaurant-showcase__view-all">
            Hamısına bax
          </Link>
        </div>

        <div className="restaurant-showcase__grid">
          {featured.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </section>
  );
}