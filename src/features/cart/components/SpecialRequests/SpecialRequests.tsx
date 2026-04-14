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
      <h3 className="special-requests__title">Special Requests</h3>

      <textarea
        className="special-requests__textarea"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Add notes for your order..."
      />
    </div>
  );
}