import { useState } from "react";
import "./Button.css";
export default function LocationButton() {
  const [loading, setLoading] = useState(false);

  const getLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation dəstəklənmir");
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position.coords.latitude, position.coords.longitude);
        setLoading(false);
      },
      (error) => {
        console.log(error);
        setLoading(false);
      }
    );
  };

  return (
    <button className="location-btn" onClick={getLocation}>
      <span className="location-icon">📍</span>
      <span className="location-text">
      {loading ? "Loading..." : "Use my location"}
      </span>
    </button>
  );
}