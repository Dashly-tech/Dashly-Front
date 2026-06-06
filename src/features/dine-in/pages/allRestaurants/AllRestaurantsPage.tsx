import { useEffect } from "react";
import RestaurantCard from "../../../../components/shared/RestaurantCard/RestaurantCard";
import { useRestaurantStore } from "../../../../app/store/restaurant.store";
import Header from "../layout/Header";
import "../../../home/components/RestaurantShowcase/RestaurantShowcase.css";

const AllRestaurantsPage = () => {
  const { restaurants, fetchRestaurants } = useRestaurantStore();

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div className="container">
      <Header />
      <section className="restaurant-showcase">
        <div className="restaurant-showcase__container">
          <div className="restaurant-showcase__header">
            <h2>Bütün restoranlar</h2>
          </div>

          <div className="restaurant-showcase__grid">
            {restaurants.filter((item)=>item.name !== "Mangal döner").map((restaurant) => (
              <RestaurantCard
                isQr={true}
                key={restaurant.id}
                restaurant={restaurant}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllRestaurantsPage;
