import "./SpecialRequests.css";

type SpecialRequestsProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SpecialRequests({
  value,
  onChange,
}: SpecialRequestsProps) {
  return (
    <div className="special-requests">
      <h3 className="special-requests__title">Əlavə qeydlər</h3>

      <textarea
        className="special-requests__textarea"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Sifarişiniz üçün qeydlər əlavə edin..."
      />
    </div>
  );
}