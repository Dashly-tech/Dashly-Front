import { useEffect, useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import { toast, ToastContainer } from "react-toastify";

import { useCartStore } from "../../../app/store/cart.store";
import { useUIStore } from "../../../app/store/ui.store";
import { useLocationStore } from "../../../app/store/location.store";

import DeliveryForm from "../../../features/cart/components/DeliveryForm/DeliveryForm";
import SpecialRequests from "../../../features/cart/components/SpecialRequests/SpecialRequests";
import WhatsappCheckout from "../../../features/cart/components/WhatsappCheckout/WhatsappCheckout";
import DeliveryChecker from "../../../features/cart/components/DeliveryChecker/DeliveryChecker";

import { useRestaurants } from "../../../utils/useRestaurants";
import { trackAddToCart, trackRemoveFromCart } from "../../../utils/analytics";

import "./CartDrawer.css";
import PaymentMethod from "../Payment/PaymentMethod";

export default function CartDrawer() {
  const [deliveryAvailable, setDeliveryAvailable] = useState<boolean | null>(
    null,
  );
  const { lat, lng } = useLocationStore();


  const { restaurants } = useRestaurants();

  const isCartOpen = useUIStore((state) => state.isCartOpen);
  const closeCart = useUIStore((state) => state.closeCart);

  const items = useCartStore((state) => state.items);
  const restaurantId = useCartStore((state) => state.restaurantId);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const totalPrice = useCartStore((state) => state.getTotalPrice());
  const restaurantWhatsappNumber = useCartStore(
    (state) => state.restaurantWhatsappNumber,
  );
  const restaurantName = useCartStore((state) => state.restaurantName);

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [paymentMethod,setPaymentMethod] = useState("")

  const restaurant = restaurants.find((r) => r.id === restaurantId);

  const hasLocation = lat !== null && lng !== null;

  useEffect(() => {
    if (items.length === 0) {
      setDeliveryAvailable(null);
    }
  }, [items.length]);

  useEffect(() => {
    if (!hasLocation) {
      setDeliveryAvailable(null);
    }
  }, [hasLocation]);

  if (!isCartOpen) return null;

  const handleClose = () => {
    setDeliveryAvailable(null);
    closeCart();
  };

  const handleWhatsappOrder = () => {
    if (!hasLocation) {
      toast.warning("Please select your location first");
      return;
    }

    if (deliveryAvailable === null) {
      toast("Please check delivery availability first", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      return;
    }

    if (deliveryAvailable === false) {
      toast.error("Delivery is not available to your location");
      return;
    }

    if (!restaurantWhatsappNumber) return;

    const messageLines = [
      `Hello, I want to place an order from Azn{
        restaurantName || "this restaurant"
      }:`,
      "",
      ...items.map(
        (item) =>
          `- ${item.name} x${item.quantity} - Azn${(
            item.price * item.quantity
          ).toFixed(2)}`,
      ),
      "",
      `Total: Azn${totalPrice.toFixed(2)}`,
      "",
      `Name: ${fullName}`,
      `Phone: ${phone}`,
      `Address: ${address}`,
      `Notes: ${notes || "-"}`,
      `Payment: ${paymentMethod}` 
    ];

    const message = encodeURIComponent(messageLines.join("\n"));
    const url = `https://wa.me/${restaurantWhatsappNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  const isCheckoutDisabled =
    items.length === 0 ||
    !fullName.trim() ||
    !phone.trim() ||
    !address.trim() ||
    !restaurantWhatsappNumber ||
    !hasLocation ||
    deliveryAvailable === false;

  return (
    <div className="cart-drawer">
      <ToastContainer position="top-center" autoClose={3000} />

      <div className="cart-drawer__backdrop" onClick={handleClose}></div>

      <aside className="cart-drawer__panel">
        <div className="cart-drawer__header">
          <h2 className="cart-drawer__title">Your Cart</h2>

          <button
            type="button"
            className="cart-drawer__close"
            onClick={handleClose}
          >
            <HiOutlineXMark />
          </button>
        </div>

        <div className="cart-drawer__content">
          {restaurantName && items.length > 0 && (
            <div className="cart-drawer__restaurant">
              Ordering from: <strong>{restaurantName}</strong>
            </div>
          )}

          {items.length === 0 ? (
            <p className="cart-drawer__empty">Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item__info">
                  <h3 className="cart-item__name">{item.name}</h3>
                  <p className="cart-item__price">${item.price}</p>
                </div>

                <div className="cart-item__actions">
                  <div className="cart-item__quantity">
                    <button
                      type="button"
                      onClick={() => {
                        decreaseQuantity(item.id);
                        trackRemoveFromCart(item, 1);
                      }}
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      type="button"
                      onClick={() => {
                        increaseQuantity(item.id);
                        trackAddToCart(item, 1);
                      }}
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    className="cart-item__remove"
                    onClick={() => {
                      removeItem(item.id);
                      trackRemoveFromCart(item, item.quantity);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}

          {items.length > 0 && !hasLocation && (
            <p className="cart-drawer__no-delivery">
              Çatdırılma üçün əvvəlcə lokasiya seçin.
            </p>
          )}

          {restaurant && items.length > 0 && hasLocation && (
            <DeliveryChecker
              userLat={lat}
              userLng={lng}
              restaurantLat={restaurant.location.lat}
              restaurantLng={restaurant.location.lng}
              radiusKm={restaurant.deliveryRadiusKm}
              onResult={(available) => setDeliveryAvailable(available)}
            />
          )}

          <DeliveryForm
            fullName={fullName}
            phone={phone}
            address={address}
            onFullNameChange={setFullName}
            onPhoneChange={setPhone}
            onAddressChange={setAddress}
          />

          <SpecialRequests value={notes} onChange={setNotes} />
          <PaymentMethod
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
          />
        </div>

        <div className="cart-drawer__footer">
          {deliveryAvailable === false && (
            <p className="cart-drawer__no-delivery">
              Delivery is not available to your location
            </p>
          )}
             
          <div className="cart-drawer__total">
            <span>Total</span>
            <strong>${totalPrice.toFixed(2)}</strong>
          </div>
          <WhatsappCheckout
            disabled={isCheckoutDisabled}
            onClick={handleWhatsappOrder}
          />
        </div>
      </aside>
    </div>
  );
}
