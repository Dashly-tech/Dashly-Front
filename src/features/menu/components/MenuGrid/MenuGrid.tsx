import ProductCard from "../../../../components/shared/ProductCard/ProductCard";
import { mockMenu } from "../../../../data/mockMenu";
import { mockRestaurants } from "../../../../data/mockRestaurant";
import "./MenuGrid.css";

type Props = {
  category: string;
};

export default function MenuGrid({ category }: Props) {
  const premiumItems = mockMenu.filter((item) => item.showInPremiumMenu);

  const filtered =
    category === "All"
      ? premiumItems
      : premiumItems.filter((item) => item.category === category);

  return (
    <div className="menu-grid">
      {filtered.map((item) => {
        const restaurant = mockRestaurants.find(
          (r) => r.id === item.restaurantId
        );

        if (!restaurant) return null;

        return (
          <ProductCard
            key={item.id}
            item={item}
            restaurant={{
              id: restaurant.id,
              name: restaurant.name,
              whatsappNumber: restaurant.whatsappNumber,
            }}
            restaurantName={restaurant.name}
            restaurantLocation={restaurant.locationText}
          />
        );
      })}
    </div>
  );
}