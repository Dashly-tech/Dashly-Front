
import { useState } from "react";

type DeliveryStatus = "idle" | "loading" | "available" | "unavailable" | "error";

type DeliveryResult = {
  status: DeliveryStatus;
  eta: string | null;
  distanceKm: number | null;
  check: (restaurantLat: number, restaurantLng: number, radiusKm: number) => void;
};

const getDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
    Math.cos((lat2 * Math.PI) / 180) *
    Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

const getRushMultiplier = (): number => {
  const h = new Date().getHours();
  return (h >= 12 && h <= 14) || (h >= 18 && h <= 21) ? 1.4 : 1;
};

const calcEta = (km: number): string => {
  const drive = Math.ceil((km / 30) * 60 * getRushMultiplier());
  const total = 15 + drive;
  return `${total - 5}–${total + 5} min`;
};

export const useDelivery = (): DeliveryResult => {
  const [status, setStatus] = useState<DeliveryStatus>("idle");
  const [eta, setEta] = useState<string | null>(null);
  const [distanceKm, setDistanceKm] = useState<number | null>(null);

  const check = (restaurantLat: number, restaurantLng: number, radiusKm: number) => {
    if (!navigator.geolocation) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const km = getDistance(
          pos.coords.latitude,
          pos.coords.longitude,
          restaurantLat,
          restaurantLng
        );

        setDistanceKm(parseFloat(km.toFixed(1)));

        if (km <= radiusKm) {
          setStatus("available");
          setEta(calcEta(km));
        } else {
          setStatus("unavailable");
          setEta(null);
        }
      },
      () => setStatus("error")
    );
  };

  return { status, eta, distanceKm, check };
};