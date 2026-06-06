import type {
  ReservationFormData,
  ReservationRestaurant,
  ReservationTable,
} from "../../types/reservation.types";
import "./ReservationSummary.css";

type Props = {
  restaurant?: ReservationRestaurant;
  table?: ReservationTable;
  formData: ReservationFormData;
};

export default function ReservationSummary({
  restaurant,
  table,
  formData,
}: Props) {
  return (
    <aside className="reservation_summary">
      <h3>Seçilmiş məlumatlar</h3>

      <div>
        <span>Restoran</span>
        <strong>{restaurant?.name || "-"}</strong>
      </div>

      <div>
        <span>Masa</span>
        <strong>{table?.name || "-"}</strong>
      </div>

      <div>
        <span>Qonaq sayı</span>
        <strong>{formData.guestCount} nəfər</strong>
      </div>

      <div>
        <span>Tarix</span>
        <strong>{formData.date || "-"}</strong>
      </div>

      <div>
        <span>Saat</span>
        <strong>{formData.time || "-"}</strong>
      </div>
    </aside>
  );
}