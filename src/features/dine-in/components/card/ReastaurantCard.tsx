

import { CiLock } from "react-icons/ci";
import type { MenuItem } from "../../../../types/common.types";
import { useCartStore } from "../../../../app/store/cart.store";
import { trackAddToCart } from "../../../../utils/analytics";

type ProductCardProps = {
  item: MenuItem;
  restaurant?: {
    id: number;
    name: string;
    whatsappNumber: string;
    restaurantLat: number;
    restaurantLng: number;
    deliveryRadiusKm: number;
  };
  restaurantName?: string;
  restaurantLocation?: string;
  isActive?: boolean;
};

export default function DidInProductCard({
  item,
  restaurant,
  restaurantName,
  restaurantLocation,
  isActive,
}: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const handleAddToCart = () => {
    if (!restaurant) return;

    addItem(
      {
        id: item.id,
        restaurantId: item.restaurantId,
        name: item.name,
        price: item.price,
        category: item.category,
        description: item.description,
        image: item.image,
      },
      {
        id: restaurant.id,
        name: restaurant.name,
        whatsappNumber: restaurant.whatsappNumber,
      }
    );

    trackAddToCart(item);
  };


  return (
    <article className="product-card">
      <div className="product-card__image-wrapper">
        <img
          src={item.image}
          alt={item.name}
          className={!isActive ? "inactive-img" : "" + "product-card__image"}
        />

        <span className="product-card__price-badge">{item.price} ₼</span>

        {isActive === false && (
          <div className="overlay">
            <div className="overlay-content">
              <span className="lock"><CiLock size={24} /></span>
              <p>AI dəstəyi ilə deaktiv edilmiş restoranlar</p>
            </div>
          </div>
        )}

      </div>

      <div className="product-card__body">
        <div>
          <span className="product-card__category">{item.category}</span>

          <h3 className="product-card__title">{item.name}</h3>

          {(restaurantName || restaurantLocation) && (
            <div className="product-card__restaurant-meta">
              {restaurantName && (
                <p className="product-card__restaurant-name">{restaurantName}</p>
              )}

              {restaurantLocation && (
                <p className="product-card__restaurant-location">
                  {restaurantLocation}
                </p>
              )}
            </div>
          )}


        </div>


        <button
          type="button"
          className="product-card__btn"
          onClick={handleAddToCart}
          disabled={!restaurant || isActive === false}
        >
          Sebətə əlavə et
        </button>
      </div>
    </article>
  );
}