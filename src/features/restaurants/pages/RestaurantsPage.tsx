import { useEffect } from "react";
import MainLayout from "../../../components/layout/MainLayout/MainLayout";
import RestaurantCard from "../../../components/shared/RestaurantCard/RestaurantCard";
import { useRestaurantStore } from "../../../app/store/restaurant.store";
import { usePageTracking } from "../../../utils/usePageTracking ";
import "./RestaurantsPage.css";

export default function RestaurantsPage() {
  usePageTracking();
  const { restaurants, loading, fetchRestaurants } = useRestaurantStore();

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <MainLayout>
      <div className="restaurants-page">
        <div className="restaurants-page__container">
          <h1 className="restaurants-page__title">Bütün restoranlar</h1>

          {loading ? (
            <p>Yüklənir...</p>
          ) : (
            <div className="restaurants-grid">
              {restaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
