import type { ReservationRestaurant } from "../../types/reservation.types";
import "./RestaurantCard.css";

type Props = {
  restaurant: ReservationRestaurant;
  onSelect: () => void;
};

export default function RestaurantCard({ restaurant, onSelect }: Props) {
  return (
    <button className="reservation_restaurant_card" onClick={onSelect}>
      <img src={restaurant.image} alt={restaurant.name} />

      <div className="reservation_restaurant_body">
        <h3>{restaurant.name}</h3>
        <p>{restaurant.address}</p>

        <div className="reservation_restaurant_meta">
          <span>⭐ {restaurant.rating}</span>
          <span>{restaurant.emptyTables} boş masa</span>
        </div>
      </div>
    </button>
  );
}