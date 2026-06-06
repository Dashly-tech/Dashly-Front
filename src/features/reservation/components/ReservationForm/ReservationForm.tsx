import type { ReservationFormData } from "../../types/reservation.types";
import "./ReservationForm.css";

type Props = {
  formData: ReservationFormData;
  onChange: (data: ReservationFormData) => void;
  onSubmit: () => void;
};

export default function ReservationForm({
  formData,
  onChange,
  onSubmit,
}: Props) {
  const updateField = (key: keyof ReservationFormData, value: string) => {
    onChange({ ...formData, [key]: value });
  };

  return (
    <form
      className="reservation_form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <h2>Rezervasiya məlumatları</h2>

      <label>
        Ad Soyad
        <input
          value={formData.fullName}
          onChange={(e) => updateField("fullName", e.target.value)}
          placeholder="Adınızı və soyadınızı yazın"
          required
        />
      </label>

      <label>
        Telefon
        <input
          value={formData.phone}
          onChange={(e) => updateField("phone", e.target.value)}
          placeholder="+994 XX XXX XX XX"
          required
        />
      </label>

      <label>
        Qonaq sayı
        <select
          value={formData.guestCount}
          onChange={(e) => updateField("guestCount", e.target.value)}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((count) => (
            <option key={count} value={count}>
              {count} nəfər
            </option>
          ))}
        </select>
      </label>

      <div className="reservation_form_row">
        <label>
          Tarix
          <input
            type="date"
            value={formData.date}
            onChange={(e) => updateField("date", e.target.value)}
            required
          />
        </label>

        <label>
          Saat
          <input
            type="time"
            value={formData.time}
            onChange={(e) => updateField("time", e.target.value)}
            required
          />
        </label>
      </div>

      <label>
        Əlavə qeyd
        <textarea
          value={formData.note}
          onChange={(e) => updateField("note", e.target.value)}
          placeholder="Məsələn: pəncərə kənarı masa istəyirəm"
        />
      </label>

      <button type="submit">Rezervasiyanı təsdiqlə</button>
    </form>
  );
}