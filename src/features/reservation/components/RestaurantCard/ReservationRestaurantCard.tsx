import React from "react";
import type { ReservationRestaurant } from "../../types/reservation.types";
import "./ReservationRestaurantCard.css";

interface Props {
  restaurant: ReservationRestaurant;
  onSelect: () => void;
}

const ReservationRestaurantCard: React.FC<Props> = ({ restaurant, onSelect }) => {
  return (
    <div className="reservation_restaurant_card" onClick={onSelect}>
      <div className="restaurant_image_wrapper">
        <img src={restaurant.image} alt={restaurant.name} />
        <span className="restaurant_rating">⭐ {restaurant.rating}</span>
      </div>
      <div className="restaurant_info">
        <h3>{restaurant.name}</h3>
        <p>{restaurant.address}</p>
        <p className="restaurant_tables">{restaurant.emptyTables} boş masa</p>
        <button className="select_restaurant_button">Restoranı seç</button>
      </div>
    </div>
  );
};

export default ReservationRestaurantCard;