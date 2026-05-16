import { Link } from "react-router-dom";
import { mockRestaurants } from "../../../../data/mockRestaurant";
import RestaurantCard from "../../../../components/shared/RestaurantCard/RestaurantCard";
import "./RestaurantShowcase.css";

export default function RestaurantShowcase() {
  const featured = mockRestaurants.filter((r) => r.isFeatured);

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