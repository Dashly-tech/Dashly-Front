import { useEffect } from "react";
import { useDelivery } from "../../../../utils/useDelivery";
import "./DeliveryChecker.css";

type Props = {
  restaurantLat: number;
  restaurantLng: number;
  radiusKm: number;
  onResult?: (available: boolean) => void;
};

export default function DeliveryChecker({
  restaurantLat,
  restaurantLng,
  radiusKm,
  onResult,
}: Props) {
  const { status, eta, distanceKm, check } = useDelivery();

  useEffect(() => {
    if (status === "available") onResult?.(true);
    if (status === "unavailable") onResult?.(false);
  }, [status]);

  return (
    <div className="delivery-checker">

      {status === "idle" && (
        <button
          className="delivery-checker__btn"
          onClick={() => check(restaurantLat, restaurantLng, radiusKm)}
        >
          Check delivery to your location
        </button>
      )}

      {status === "loading" && (
        <div className="delivery-checker__loading">
          <span className="delivery-checker__spinner" />
          Getting your location...
        </div>
      )}

      {status === "available" && (
        <div className="delivery-checker__result delivery-checker__result--ok">
          <div className="delivery-checker__badge">✅ Delivery available</div>
          <div className="delivery-checker__meta">
            <span> {eta}</span>
            <span> {distanceKm} km away</span>
          </div>
        </div>
      )}

      {status === "unavailable" && (
        <div className="delivery-checker__result delivery-checker__result--no">
          <div className="delivery-checker__badge">Outside delivery zone</div>
          <p className="delivery-checker__dist">
            You are {distanceKm} km away (limit: {radiusKm} km)
          </p>
         
          <p className="delivery-checker__notice">
            Unfortunately we don't deliver to your area yet.
          </p>
          <button
            className="delivery-checker__retry"
            onClick={() => check(restaurantLat, restaurantLng, radiusKm)}
          >
            Try again
          </button>
        </div>
      )}

      {status === "error" && (
        <div className="delivery-checker__result delivery-checker__result--no">
         
          <p className="delivery-checker__notice">
            Could not get your location. Please allow location access in
            your browser settings and try again.
          </p>
          <button
            className="delivery-checker__retry"
            onClick={() => check(restaurantLat, restaurantLng, radiusKm)}
          >
            Retry
          </button>
        </div>
      )}

    </div>
  );
}