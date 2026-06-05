import { useEffect } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import { useCartStore } from "../../../../app/store/cart.store";
import GroupBasketContent from "./GroupBasketContent";
import IndividualBasketContent from "./IndividualBasketContent";
import styles from "./BasketDrawer.module.css";

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

  return (
    <div className={styles.root} role="dialog" aria-modal="true" aria-label="Səbət">
      <div className={styles.backdrop} onClick={onClose} />

      <aside
        className={`${styles.panel} ${
          orderMode === "group" ? styles.panelGroup : ""
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
          className={`${styles.content} ${
            showIndividualEmpty ? styles.contentIndividualEmpty : ""
          }`}
        >
          {orderMode === "group" ? (
            <GroupBasketContent />
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
      </aside>
    </div>
  );
}
