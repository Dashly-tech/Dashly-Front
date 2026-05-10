import { useState } from "react";
import { useLocationStore } from "../../../app/store/location.store";
import "./Button.css";

export default function LocationButton({setOpen}:{setOpen:()=>void}) {
  const [loading, setLoading] = useState(false);

  const setLocation = useLocationStore((state) => state.setLocation);
  const setStatus = useLocationStore((state) => state.setStatus);

  const getLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation dəstəklənmir");
      return;
    }

    setLoading(true);
    setStatus("loading");

    navigator.geolocation.getCurrentPosition(
     (position) => {

  setLocation(position.coords.latitude, position.coords.longitude);
  // console.log(position.coords.latitude);
  
  setLoading(false);
},
     (error) => {

  if (error.code === error.PERMISSION_DENIED) {
    // alert("Lokasiya icazəsi bağlanıb.");
    setOpen()
  }

  setLoading(false);
},
    );
  };

  return (
    <button className="location-btn" onClick={getLocation} disabled={loading}>
      <span className="location-icon">📍</span>
      <span className="location-text">
        {loading ? "Loading..." : "Use my location"}
      </span>
    </button>
  );
}
