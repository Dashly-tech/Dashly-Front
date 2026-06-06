import type { ReservationTable } from "../../types/reservation.types";
import "./TableCard.css";

type Props = {
  table: ReservationTable;
  isSelected: boolean;
  onSelect: () => void;
};

export default function TableCard({ table, isSelected, onSelect }: Props) {
  return (
    <button
      className={`reservation_table_card ${
        table.isReserved ? "reserved" : "available"
      } ${isSelected ? "selected" : ""}`}
      disabled={table.isReserved}
      onClick={onSelect}
    >
      <div className="table_icon">🍽️</div>
      <h3>{table.name}</h3>
      <p>{table.seats} nəfərlik</p>
      <span>{table.isReserved ? "Rezerv olunub" : "Boşdur"}</span>
    </button>
  );
}