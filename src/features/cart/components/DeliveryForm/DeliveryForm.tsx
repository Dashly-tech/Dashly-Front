import "./DeliveryForm.css";

type DeliveryFormProps = {
  fullName: string;
  phone: string;
  address: string;
  onFullNameChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
  onAddressChange: (value: string) => void;
};

export default function DeliveryForm({
  fullName,
  phone,
  address,
  onFullNameChange,
  onPhoneChange,
  onAddressChange,
}: DeliveryFormProps) {
  return (
    <div className="delivery-form">
      <h3 className="delivery-form__title">Çatdırılma məlumatı</h3>

      <div className="delivery-form__group">
        <label className="delivery-form__label">Ad, soyad</label>
        <input
          type="text"
          className="delivery-form__input"
          value={fullName}
          onChange={(e) => onFullNameChange(e.target.value)}
          placeholder="Ad, soyad əlavə edin"
        />
      </div>

      <div className="delivery-form__group">
        <label className="delivery-form__label">Əlaqə nömrəsi</label>
        <input
          type="text"
          className="delivery-form__input"
          value={phone}
          onChange={(e) => onPhoneChange(e.target.value)}
          placeholder="Əlaqə nömrənizi əlavə edin"
        />
      </div>

      <div className="delivery-form__group">
        <label className="delivery-form__label">Ünvan</label>
        <input
          type="text"
          className="delivery-form__input"
          value={address}
          onChange={(e) => onAddressChange(e.target.value)}
          placeholder="Çatdırılma ünvanınızı əlavə edin"
        />
      </div>
    </div>
  );
}