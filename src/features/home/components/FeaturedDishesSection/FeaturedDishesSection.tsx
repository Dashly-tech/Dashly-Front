import { useEffect } from "react";
import ProductCard from "../../../../components/shared/ProductCard/ProductCard";
import { useRestaurantStore } from "../../../../app/store/restaurant.store";
import { useMenuStore } from "../../../../app/store/menu.store";
import "./FeaturedDishesSection.css";

export default function FeaturedDishesSection() {
  const { restaurants, fetchRestaurants } = useRestaurantStore();
  const { menu, fetchMenu } = useMenuStore();

  useEffect(() => {
    fetchRestaurants();
    fetchMenu();
  }, []);

  const featured = menu.filter((item) => item.isFeatured || item.isDishOfDay);

  return (
    <section className="featured">
      <div className="featured__container">
        <h2 className="featured__title">🔥 Populyar yeməklər</h2>

        <div className="featured__grid">
          {featured.map((item) => {
            const restaurant = restaurants.find((r) => r.id === item.restaurantId);
            if (!restaurant) return null;

            return (
              <ProductCard
                key={item.id}
                item={item}
                restaurant={{
                  id: restaurant.id,
                  name: restaurant.name,
                  whatsappNumber: restaurant.whatsappNumber,
                  restaurantLat: restaurant.location.lat,
                  restaurantLng: restaurant.location.lng,
                  deliveryRadiusKm: restaurant.deliveryRadiusKm,
                }}
                restaurantName={restaurant.name}
                restaurantLocation={restaurant.locationText}
                isActive={restaurant.isActive}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}