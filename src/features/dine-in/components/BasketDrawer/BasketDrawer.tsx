import { useEffect } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import { useCartStore } from "../../../../app/store/cart.store";
import GroupBasketContent from "./GroupBasketContent";
import IndividualBasketContent from "./IndividualBasketContent";
import styles from "./BasketDrawer.module.css";
import WhatsappCheckout from "../../../cart/components/WhatsappCheckout/WhatsappCheckout";
import { useGroupBasketStore } from "../../../../app/store/gorup.store";

type BasketDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  personCount: number;
};

export default function BasketDrawer({
  isOpen,
  onClose,
  personCount,
}: BasketDrawerProps) {
  const totalItems = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0),
  );
  const savedPersonCount = Number(localStorage.getItem("personCount"));
  const totalPrice = useCartStore((state) => state.getTotalPrice());
  const totalItem = useCartStore((state) => state.items);
  const restaurantWhatsappNumber = useCartStore(
    (state) => state.restaurantWhatsappNumber,
  );
  const { members, tableNumber } = useGroupBasketStore()
  const restaurantName = useCartStore((state) => state.restaurantName);
  const orderMode = personCount === 2 ? "group" : "individual";
  const orderLabel =
    orderMode === "group" ? "Qrup sifarişi" : "Fərdi sifariş";
  const showIndividualEmpty =
    orderMode === "individual" && totalItems === 0;




  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleWhatsappOrder = () => {
    const messageLines = [
      `Salam ${restaurantName}, sifariş vermək istəyirəm.`,
      `Masa nömrəsi: ${tableNumber}`,
      "",
    ];

    // Fərdi sifariş
    if (savedPersonCount === 1) {
      messageLines.push("Sifariş:");

      totalItem.forEach((item) => {
        messageLines.push(
          `- ${item.name} x${item.quantity} - ₼${(
            item.price * item.quantity
          ).toFixed(2)}`
        );
      });
    }

    // Qrup sifarişi
    if (savedPersonCount === 2) {
      messageLines.push("Qrup sifarişi:");
      messageLines.push("");
      totalItem.forEach((item) => {
        messageLines.push(
          `- ${item.name} x${item.quantity} - ₼${(
            item.price * item.quantity
          ).toFixed(2)}`
        );
      });
      members.forEach((person) => {
        if (person.status === "accepted") {
          messageLines.push(`${person.name}`);
        }
        messageLines.push("");
      });
    }

    messageLines.push(
      `Yekun total: ₼${totalPrice.toFixed(2)}`,

    );

    const message = encodeURIComponent(messageLines.join("\n"));
    const url = `https://wa.me/${restaurantWhatsappNumber}?text=${message}`;

    window.open(url, "_blank");
  };
  console.log(totalItem, "totalItem");


  return (
    <div className={styles.root} role="dialog" aria-modal="true" aria-label="Səbət">
      <div className={styles.backdrop} onClick={onClose} />

      <aside
        className={`${styles.panel} ${orderMode === "group" ? styles.panelGroup : ""
          }`}
      >
        <div className={styles.header}>
          <div className={styles.headerText}>
            <h2 className={styles.title}>Səbət</h2>
            <p className={styles.subtitle}>
              {totalItems} məhsul • {orderLabel}
            </p>
          </div>

          <button
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label="Səbəti bağla"
          >
            <HiOutlineXMark />
          </button>
        </div>

        <div className={styles.divider} aria-hidden="true" />

        <div
          key={orderMode}
          className={`${styles.content} ${showIndividualEmpty ? styles.contentIndividualEmpty : ""
            }`}
        >
          {orderMode === "group" ? (

            <>
              <GroupBasketContent />
            </>
          ) : showIndividualEmpty ? (
            <div className={styles.empty}>
              <div className={styles.emptyIcon} aria-hidden="true">
                <HiOutlineXMark />
              </div>
              <p className={styles.emptyTitle}>Səbətiniz boşdur</p>
              <p className={styles.emptyHint}>Məhsul əlavə edin</p>
            </div>
          ) : (
            <IndividualBasketContent />
          )}
        </div>
        <div className="cart-drawer__footer">
          <div className="cart-drawer__total">
            <><span>Total</span><strong>₼{totalPrice.toFixed(2)}</strong></>
          </div>
          <WhatsappCheckout onClick={handleWhatsappOrder} disabled={!tableNumber  || totalItems === 0} />
        </div>
      </aside>
    </div>
  );
}
