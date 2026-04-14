import { useParams } from "react-router-dom";
import MainLayout from "../../../components/layout/MainLayout/MainLayout";
import { mockRestaurants } from "../../../data/mockRestaurant";
import { mockMenu } from "../../../data/mockMenu";
import ProductCard from "../../../components/shared/ProductCard/ProductCard";
import "./RestaurantDetailsPage.css";

export default function RestaurantDetailsPage() {
  const { slug } = useParams();

  const restaurant = mockRestaurants.find((item) => item.slug === slug);

  if (!restaurant) {
    return (
      <MainLayout>
        <div className="restaurant-details-page">
          <div className="restaurant-details-page__container">
            <h2>Restaurant not found</h2>
            <p>The restaurant you are looking for does not exist.</p>
          </div>
        </div>
      </MainLayout>
    );
  }

  const restaurantMenu = mockMenu.filter(
    (item) => item.restaurantId === restaurant.id
  );

  return (
    <MainLayout>
      <div className="restaurant-details-page">
        <div className="restaurant-details-page__container">
          <div className="restaurant-details-page__hero">
            <div
              className="restaurant-details-page__cover"
              style={{ backgroundImage: `url(${restaurant.coverImage})` }}
            />

            <div className="restaurant-details-page__info">
              <span className="restaurant-details-page__type">
                {restaurant.cuisineType}
              </span>

              <h1 className="restaurant-details-page__title">
                {restaurant.name}
              </h1>

              <p className="restaurant-details-page__description">
                {restaurant.description}
              </p>

              <div className="restaurant-details-page__meta">
                <span>{restaurant.locationText}</span>
                <span>{restaurant.address}</span>
              </div>
            </div>
          </div>

          <div className="restaurant-details-page__menu">
            <h2 className="restaurant-details-page__menu-title">Menu</h2>

            <div className="restaurant-details-page__grid">
              {restaurantMenu.map((item) => (
                <ProductCard
                  key={item.id}
                  item={item}
                  restaurant={{
                    id: restaurant.id,
                    name: restaurant.name,
                    whatsappNumber: restaurant.whatsappNumber,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}