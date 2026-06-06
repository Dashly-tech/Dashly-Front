import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import TableCard from "../../components/TableCard/TableCard";
import ReservationForm from "../../components/ReservationForm/ReservationForm";
import ReservationSummary from "../../components/ReservationSummary/ReservationSummary";
import {
  reservationRestaurants,
  reservationTables,
} from "../../store/reservation.store";
import type {
  ReservationFormData,
  ReservationTable,
} from "../../types/reservation.types";
import "./TablesPage.css";

const initialFormData: ReservationFormData = {
  fullName: "",
  phone: "",
  guestCount: "2",
  date: "",
  time: "",
  note: "",
};

export default function TablesPage() {
  const { slug } = useParams();
  const [selectedTable, setSelectedTable] = useState<ReservationTable | null>(
    null
  );
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const restaurant = useMemo(
    () => reservationRestaurants.find((item) => item.slug === slug),
    [slug]
  );

  const handleTableSelect = (table: ReservationTable) => {
    setSelectedTable(table);
    setIsPanelOpen(true);
  };

  const handleSubmit = () => {
    console.log({
      restaurant,
      table: selectedTable,
      customer: formData,
    });

    alert("Rezervasiya uğurla təsdiqləndi!");
    setIsPanelOpen(false);
    setSelectedTable(null);
    setFormData(initialFormData);
  };

  return (
    <main className="reservation_tables_page">
      <section className="tables_header">
        <h1>{restaurant?.name || "Restoran"} - masa seçin</h1>
        <p>Boş masalardan birini seçin və rezervasiya məlumatlarını doldurun</p>
      </section>

      <section className="tables_grid">
        {reservationTables.map((table) => (
          <TableCard
            key={table.id}
            table={table}
            isSelected={selectedTable?.id === table.id}
            onSelect={() => handleTableSelect(table)}
          />
        ))}
      </section>

      {isPanelOpen && <div className="reservation_overlay" />}

      <aside className={`reservation_side_panel ${isPanelOpen ? "open" : ""}`}>
        <button
          className="close_panel_button"
          onClick={() => setIsPanelOpen(false)}
        >
          ×
        </button>

        <ReservationSummary
          restaurant={restaurant}
          table={selectedTable || undefined}
          formData={formData}
        />

        <ReservationForm
          formData={formData}
          onChange={setFormData}
          onSubmit={handleSubmit}
        />
      </aside>
    </main>
  );
}