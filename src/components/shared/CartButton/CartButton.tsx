import { HiOutlineShoppingBag } from "react-icons/hi2";
import clsx from "clsx";
import "./CartButton.css";

type CartButtonProps = {
  count?: number;
  onClick?: () => void;
  active?: boolean;
};

export default function CartButton({
  count = 0,
  onClick,
  active = false,
}: CartButtonProps) {
  return (
    <button
      type="button"
      className={clsx("cart-button", active && "cart-button--active")}
      onClick={onClick}
      aria-label={`Cart with ${count} items`}
    >
      <HiOutlineShoppingBag />
      <span>Cart ({count})</span>
    </button>
  );
}