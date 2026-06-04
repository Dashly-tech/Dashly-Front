import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Header from "../layout/Header";
import { usePageTracking } from "../../../../utils/usePageTracking ";
import { useRestaurantStore } from "../../../../app/store/restaurant.store";
import { useMenuStore } from "../../../../app/store/menu.store";
import MenuFilters from "../../../menu/components/MenuFilters/MenuFilters";
import DidInProductCard from "../../components/card/ReastaurantCard";

const deliveryMessages = [
  `📍 Çatdırılma şərtləri:\n\n• Əzizbəyov — 48 ₼↓ → +7 ₼\n• Binəqədi — 35 ₼↓ → +5 ₼`,
  `📍 Çatdırılma şərtləri:\n\n• Biləcəri — 40 ₼↓ → +6 ₼\n• 20 Yanvar — 28 ₼↓ → +4 ₼`,
  `📍 Çatdırılma şərtləri:\n\n• Yasamal — 33 ₼↓ → +4 ₼\n• Əcəmi — 33 ₼↓ → +4 ₼`,
];

export default function DineInRestaurantDetailsPage() {
  const [category, setCategory] = useState("All");
  const [currentMessage, setCurrentMessage] = useState(0);
  const [searchParams] = useSearchParams();
  const { slug } = useParams();
  usePageTracking();

  const { restaurants, fetchRestaurants } = useRestaurantStore();
  const { menu, fetchMenu } = useMenuStore();

  useEffect(() => {
    fetchRestaurants();
    fetchMenu();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % deliveryMessages.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const food = searchParams.get("FOODS");
  const restaurant = restaurants.find((r) => r.slug === slug);
  const restaurantMenu = menu.filter((item) => item.restaurantId === restaurant?.id);

  const categories = [
    "All",
    ...new Set(restaurantMenu.map((item) => item.category)),
  ];

  const filterMenu = restaurantMenu.filter((item) => {
    const matchesCategory = category === "All" || item.category.includes(category);
    const matchesFood = !food || item.name.includes(food);
    return matchesCategory && matchesFood;
  });

  if (restaurants.length > 0 && !restaurant) {
    return (
      <>
      <Header/>
        <div className="restaurant-details-page">
          <div className="restaurant-details-page__container">
            <h2>Restoran tapılmadı</h2>
            <p>Axtardığınız restoran mövcud deyil.</p>
          </div>
        </div>
      </>
    );
  }

  if (!restaurant) {
    return (
      <>
         <Header/>
        <div className="restaurant-details-page">
          <div className="restaurant-details-page__container">
            <p>Yüklənir...</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
       <Header/>
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

            {restaurant.name === "Mangal döner" && (
              <div className="restaurant-details-page__floating-info">
                <div className="restaurant-details-page__floating-card">
                  <pre>{deliveryMessages[currentMessage]}</pre>
                </div>
              </div>
            )}
          </div>

          <div className="restaurant-details-page__menu">
            <h2 className="restaurant-details-page__menu-title">Menyu</h2>

            {!food && (
              <MenuFilters
                active={category}
                categories={categories}
                onChange={(cat) => setCategory(cat)}
              />
            )}

            <div className="restaurant-details-page__grid">
              {filterMenu.map((item) => (
                <DidInProductCard
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
