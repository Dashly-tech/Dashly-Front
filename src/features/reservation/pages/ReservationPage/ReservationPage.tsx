import { useNavigate } from "react-router-dom";
import { reservationRestaurants } from "../../store/reservation.store";
// @ts-ignore
import "./ReservationPage.css";
import ReservationRestaurantCard from "../../components/RestaurantCard/ReservationRestaurantCard";
export default function ReservationPage() {
  const navigate = useNavigate();

  return (
    <main className="reservation_page">
      <section className="reservation_hero">
        <h1>Restoran seçin</h1>
        <p>Masa rezervasiya etmək üçün istədiyiniz restoranı seçin</p>
      </section>

      <section className="reservation_restaurants_grid">
        {reservationRestaurants.map((restaurant) => (
          <ReservationRestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            onSelect={() =>
              navigate(`/reservation/restaurants/${restaurant.slug}/tables`)
            }
          />
        ))}
      </section>
    </main>
  );
}
