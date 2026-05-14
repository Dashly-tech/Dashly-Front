import { FaWhatsapp } from "react-icons/fa";
import "./WhatsappCheckout.css";

type WhatsappCheckoutProps = {
  disabled?: boolean;
  onClick: () => void;
};

export default function WhatsappCheckout({
  disabled = false,
  onClick,
}: WhatsappCheckoutProps) {
  return (
    <button
      type="button"
      className="whatsapp-checkout"
      onClick={onClick}
      disabled={disabled}
    >
      <FaWhatsapp />
      <span>Sifarişi təsdiq et</span>
    </button>
  );
}