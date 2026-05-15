import { useEffect, useState } from "react";
import "./DeliveryChecker.css";

type Props = {
  userLat: number;
  userLng: number;
  restaurantLat: number;
  restaurantLng: number;
  radiusKm: number;
  onResult: (available: boolean) => void;
};

type Status = "idle" | "available" | "unavailable";

function calculateDistanceKm(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number,
) {
  const R = 6371;

  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
    Math.cos((lat2 * Math.PI) / 180) *
    Math.sin(dLng / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

export default function DeliveryChecker({
  userLat,
  userLng,
  restaurantLat,
  restaurantLng,
  radiusKm,
  onResult,
}: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [distanceKm, setDistanceKm] = useState<number | null>(null);

  const checkDelivery = () => {

    const distance = calculateDistanceKm(
      userLat,
      userLng,
      restaurantLat,
      restaurantLng,
    );

    const roundedDistance = Number(distance.toFixed(1));
    setDistanceKm(roundedDistance);

    if (distance <= radiusKm) {
      setStatus("available");
      onResult(true);
    } else {
      setStatus("unavailable");
      onResult(false);
    }
  };

  useEffect(() => {
    setStatus("idle");
    setDistanceKm(null);
  }, [userLat, userLng, restaurantLat, restaurantLng, radiusKm]);
  // console.log(userLat,userLng,);

  return (
    <div className="delivery-checker">
      {status === "idle" && (
        <button className="delivery-checker__btn" onClick={checkDelivery}>
          Zəhmət olmasa, yerləşdiyiniz ünvana çatdırılmanı yoxlayın
        </button>
      )}

      {status === "available" && (
        <div className="delivery-checker__result delivery-checker__result--ok">
          <div className="delivery-checker__badge">✅ Çatdırılma aktivdir</div>
          <div className="delivery-checker__meta">
            <span>{distanceKm} km uzaq</span>
          </div>
        </div>
      )}

      {status === "unavailable" && (
        <div className="delivery-checker__result delivery-checker__result--no">
          <div className="delivery-checker__badge">Çatdırılma zonası xaricindədir
          </div>

          <p className="delivery-checker__dist">
            Siz {distanceKm} km uzaqsınız (limit: {radiusKm} km)
          </p>

          <p className="delivery-checker__notice">
            Təəssüf ki, hələ sizin ərazinizə çatdırılma etmirik.

          </p>

          <button className="delivery-checker__retry" onClick={checkDelivery}>
            Yenidən cəhd edin
          </button>
        </div>
      )}
    </div>
  );
}
