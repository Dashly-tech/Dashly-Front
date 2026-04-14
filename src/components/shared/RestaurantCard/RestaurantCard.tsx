import { Link } from "react-router-dom";
import type { Restaurant } from "../../../data/mockRestaurant";
import "./RestaurantCard.css";

type Props = {
  restaurant: Restaurant;
};

export default function RestaurantCard({ restaurant }: Props) {
  return (
    <Link to={`/restaurants/${restaurant.slug}`} className="restaurant-card">
      <div className="restaurant-card__media">
        <img
          src={restaurant.coverImage}
          alt={restaurant.name}
          className="restaurant-card__image"
        />

        <div className="restaurant-card__overlay"></div>
      </div>

      <div className="restaurant-card__body">
        <h3>{restaurant.name}</h3>
        <p>{restaurant.cuisineType}</p>
        <span>{restaurant.locationText}</span>
      </div>
    </Link>
  );
}