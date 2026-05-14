import { useCartStore } from "../../../app/store/cart.store";
import type { MenuItem } from "../../../data/mockMenu";
import { trackAddToCart } from "../../../utils/analytics";
import "./ProductCard.css";
import { MdDeliveryDining } from "react-icons/md";
import { HiOutlineXCircle } from "react-icons/hi2";
import { useDelivery } from "../../../utils/useDelivery";
import { useEffect } from "react";
import { CiLock } from "react-icons/ci";

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

export default function ProductCard({
  item,
  restaurant,
  restaurantName,
  restaurantLocation,
  isActive,
}: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const { status, check } = useDelivery();
  const handleAddToCart = () => {
    if (!restaurant) return;

    addItem(
      {
        id: item.id,
        restaurantId: item.restaurantId,
        name: item.name,
        price: item.price,
        category: item.category,
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
  // const isNotAvailable = status
  useEffect(() => {
    if (restaurant) {
      check(restaurant.restaurantLat, restaurant.restaurantLng, restaurant.deliveryRadiusKm);
    }
  }, [])

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
              <p>Deactive Restaurant powered by AI</p>
            </div>
          </div>
        )}
        {/* {
          restaurantName  === "Dadlı Dönər" &&  <span className="product-card__delivery-badge">Çatdırılma yalnız:<span>Nərimanova</span></span>
        } */}
        {status === "unavailable" ? (
          <div className="delivery-badge error">
            <HiOutlineXCircle /> Delivery not available
          </div>
        ) : (
          <div className="delivery-badge success">
            <MdDeliveryDining size={24} /> Delivery available
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
          disabled={!restaurant || status === "unavailable" || isActive === false}
        >
          Add to cart
        </button>
      </div>
    </article>
  );
}