// import { Link } from "react-router-dom";
import Hero from "../../components/home/Hero";
import Header from "../layout/Header";
import { useEffect } from "react";
import RestaurantCard from "../../../../components/shared/RestaurantCard/RestaurantCard";
import { useRestaurantStore } from "../../../../app/store/restaurant.store";
import { Link } from "react-router-dom";

const DineinRestaurantsPage = () => {
   const { restaurants, fetchRestaurants } = useRestaurantStore();

   useEffect(() => {
    fetchRestaurants();
  }, []);

  const filterRestaurnat = restaurants.filter((item)=>item.name !== "Mangal döner")
  
  return (
    <div className="container">
      <Header />
      <Hero />
      <section className="restaurant-showcase">
        <div className="restaurant-showcase__container">
          <div className="restaurant-showcase__header">
            <h2>Restoranlar</h2>

            <Link to="/all-restaurants" className="restaurant-showcase__view-all">
              Hamısına bax
            </Link>
          </div>

          <div className="restaurant-showcase__grid">
            {filterRestaurnat.map((restaurant) => (
              <RestaurantCard isQr={true} key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DineinRestaurantsPage;
