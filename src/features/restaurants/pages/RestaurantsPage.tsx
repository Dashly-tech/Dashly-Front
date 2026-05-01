import MainLayout from "../../../components/layout/MainLayout/MainLayout";
// import { mockRestaurants } from "../../../data/mockRestaurant";
import { useRestaurants } from "../../../utils/useRestaurants"; 
import RestaurantCard from "../../../components/shared/RestaurantCard/RestaurantCard";
import "./RestaurantsPage.css";
import { usePageTracking } from "../../../utils/usePageTracking ";

export default function RestaurantsPage() {
    usePageTracking();
      const { restaurants, error } = useRestaurants();
      console.log(error ,"something went wrong");
      
  return (
    <MainLayout>
      <div className="restaurants-page">
        <div className="restaurants-page__container">
          <h1 className="restaurants-page__title">All Restaurants</h1>

          <div className="restaurants-grid">
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}