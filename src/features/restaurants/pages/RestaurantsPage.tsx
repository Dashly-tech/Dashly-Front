import MainLayout from "../../../components/layout/MainLayout/MainLayout";
import { mockRestaurants } from "../../../data/mockRestaurant";
import RestaurantCard from "../../../components/shared/RestaurantCard/RestaurantCard";
import "./RestaurantsPage.css";
import { usePageTracking } from "../../../utils/usePageTracking ";

export default function RestaurantsPage() {
    usePageTracking();
   
      
  return (
    <MainLayout>
      <div className="restaurants-page">
        <div className="restaurants-page__container">
          <h1 className="restaurants-page__title">Bütün Restoranlar</h1>

          <div className="restaurants-grid">
            {mockRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}