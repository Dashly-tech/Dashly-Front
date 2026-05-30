import { useEffect } from "react";
import ProductCard from "../../../../components/shared/ProductCard/ProductCard";
import { useRestaurantStore } from "../../../../app/store/restaurant.store";
import { useMenuStore } from "../../../../app/store/menu.store";
import "./MenuGrid.css";

type Props = {
  category: string;
};

export default function MenuGrid({ category }: Props) {
  const { restaurants, fetchRestaurants } = useRestaurantStore();
  const { menu, fetchMenu } = useMenuStore();

  useEffect(() => {
    fetchRestaurants();
    fetchMenu();
  }, []);

  const premiumItems = menu.filter((item) => item.showInPremiumMenu);
  const filtered =
    category === "All"
      ? premiumItems
      : premiumItems.filter((item) => item.category === category);

  return (
    <div className="menu-grid">
      {filtered.map((item) => {
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
  );
}