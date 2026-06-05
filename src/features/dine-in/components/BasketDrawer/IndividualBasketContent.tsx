import { useCartStore } from "../../../../app/store/cart.store";
import styles from "./BasketDrawer.module.css";

export default function IndividualBasketContent() {
  const items = useCartStore((state) => state.items);
  const restaurantName = useCartStore((state) => state.restaurantName);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  return (
    <div className={styles.individual}>
      {restaurantName && (
        <p className={styles.restaurantLabel}>
          Sifariş verilir: <strong>{restaurantName}</strong>
        </p>
      )}

      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id} className={styles.item}>
            <div className={styles.itemRow}>
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.itemImage}
                />
              )}

              <div className={styles.itemBody}>
                <div className={styles.itemTop}>
                  <span className={styles.itemName}>{item.name}</span>
                  <span className={styles.itemPrice}>
                    ₼ {item.price.toFixed(2)}
                  </span>
                </div>

                <div className={styles.itemActions}>
                  <div className={styles.quantity}>
                    <button
                      type="button"
                      className={styles.quantityBtn}
                      onClick={() => decreaseQuantity(item.id)}
                      aria-label={`${item.name} miqdarını azalt`}
                    >
                      -
                    </button>
                    <span className={styles.quantityValue}>{item.quantity}</span>
                    <button
                      type="button"
                      className={styles.quantityBtn}
                      onClick={() => increaseQuantity(item.id)}
                      aria-label={`${item.name} miqdarını artır`}
                    >
                      +
                    </button>
                  </div>
                  <span className={styles.itemMeta}>
                    Cəmi: ₼{(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
