import { useParams, useSearchParams } from "react-router-dom";
import MainLayout from "../../../components/layout/MainLayout/MainLayout";
import { mockRestaurants } from "../../../data/mockRestaurant";
import { mockMenu } from "../../../data/mockMenu";
import ProductCard from "../../../components/shared/ProductCard/ProductCard";
import "./RestaurantDetailsPage.css";
import { usePageTracking } from "../../../utils/usePageTracking ";
import MenuFilters from "../../menu/components/MenuFilters/MenuFilters";
import { useEffect, useState } from "react";

export default function RestaurantDetailsPage() {
  const [category, setCategory] = useState("All");
  const [searchParams] = useSearchParams();
  const food = searchParams.get("FOODS");
  const deliveryMessages = [
    `📍 Çatdırılma şərtləri:

• Əzizbəyov — 48 ₼↓ → +7 ₼
• Binəqədi — 35 ₼↓ → +5 ₼`,

    `📍 Çatdırılma şərtləri:

• Biləcəri — 40 ₼↓ → +6 ₼
• 20 Yanvar — 28 ₼↓ → +4 ₼`,

    `📍 Çatdırılma şərtləri:

• Yasamal — 33 ₼↓ → +4 ₼
• Əcəmi — 33 ₼↓ → +4 ₼`,
  ];

  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage(
        (prev) => (prev + 1) % deliveryMessages.length
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const { slug } = useParams();

  usePageTracking();

  const restaurant = mockRestaurants.find(
    (item) => item.slug === slug
  );

  const restaurantMenu = mockMenu.filter(
    (item) => item.restaurantId === restaurant?.id
  );

  const categories = [
    "All",
    ...new Set(
      restaurantMenu.map((item) => item.category)
    ),
  ];

  const filterMenu = restaurantMenu.filter((item) => {
    const matchesCategory =
      category === "All" || item.category.includes(category);
    const matchesFood =
      !food || item.name.includes(food);

    return matchesCategory && matchesFood;
  });

  if (!restaurant) {
    return (
      <MainLayout>
        <div className="restaurant-details-page">
          <div className="restaurant-details-page__container">
            <h2>Restoran tapılmadı</h2>

            <p>
              Axtardığınız restoran mövcud deyil.
            </p>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="restaurant-details-page">
        <div className="restaurant-details-page__container">
          <div className="restaurant-details-page__hero">
            <div
              className="restaurant-details-page__cover"
              style={{
                backgroundImage: `url(${restaurant.coverImage})`,
              }}
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
            {
              restaurant.name === "Mangal döner" && <div className="restaurant-details-page__floating-info">
                <div className="restaurant-details-page__floating-card">
                  <pre>
                    {
                      deliveryMessages[
                      currentMessage
                      ]
                    }
                  </pre>
                </div>
              </div>
            }

          </div>

          <div className="restaurant-details-page__menu">
            <h2 className="restaurant-details-page__menu-title">
              Menyu
            </h2>

            <div>
              {
                !food && <MenuFilters
                  active={category}
                  categories={categories}
                  onChange={(cat) =>
                    setCategory(cat)
                  }
                />
              }

            </div>

            <div className="restaurant-details-page__grid">
              {filterMenu.map((item) => (
                <ProductCard
                  key={item.id}
                  item={item}
                  restaurant={{
                    id: restaurant.id,
                    name: restaurant.name,
                    whatsappNumber:
                      restaurant.whatsappNumber,
                    restaurantLat:
                      restaurant.location.lat,
                    restaurantLng:
                      restaurant.location.lng,
                    deliveryRadiusKm:
                      restaurant.deliveryRadiusKm,
                  }}
                  restaurantName={
                    restaurant.name
                  }
                  restaurantLocation={
                    restaurant.locationText
                  }
                  isActive={restaurant.isActive}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}