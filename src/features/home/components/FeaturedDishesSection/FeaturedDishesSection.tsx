import { mockMenu } from "../../../../data/mockMenu";
import { mockRestaurants } from "../../../../data/mockRestaurant";
import ProductCard from "../../../../components/shared/ProductCard/ProductCard";
import "./FeaturedDishesSection.css";

export default function FeaturedDishesSection() {
  const featured = mockMenu.filter(
    (item) => item.isFeatured || item.isDishOfDay
  );

  return (
    <section className="featured">
      <div className="featured__container">
        <h2 className="featured__title">🔥 Popular Dishes</h2>

        <div className="featured__grid">
          {featured.map((item) => {
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
      </div>
    </section>
  );
}