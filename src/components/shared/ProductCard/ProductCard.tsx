import { useCartStore } from "../../../app/store/cart.store";
import type { MenuItem } from "../../../data/mockMenu";
import "./ProductCard.css";

type ProductCardProps = {
  item: MenuItem;
  restaurant?: {
    id: number;
    name: string;
    whatsappNumber: string;
  };
  restaurantName?: string;
  restaurantLocation?: string;
};

export default function ProductCard({
  item,
  restaurant,
  restaurantName,
  restaurantLocation,
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
  };

  return (
    <article className="product-card">
      <div className="product-card__image-wrapper">
        <img
          src={item.image}
          alt={item.name}
          className="product-card__image"
        />

        <span className="product-card__price-badge">${item.price}</span>
        {
          restaurantName  === "Dadlı Dönər" &&  <span className="product-card__delivery-badge">Çatdırılma yalnız:<span>Nərimanova</span></span>
        }
       
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

          <p className="product-card__description">{item.description}</p>

        </div>

        <button
          type="button"
          className="product-card__btn"
          onClick={handleAddToCart}
          disabled={!restaurant}
        >
          Add to cart
        </button>
      </div>
    </article>
  );
}