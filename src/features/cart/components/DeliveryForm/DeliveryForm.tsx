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
      <h3 className="delivery-form__title">Delivery Info</h3>

      <div className="delivery-form__group">
        <label className="delivery-form__label">Full name</label>
        <input
          type="text"
          className="delivery-form__input"
          value={fullName}
          onChange={(e) => onFullNameChange(e.target.value)}
          placeholder="Enter your full name"
        />
      </div>

      <div className="delivery-form__group">
        <label className="delivery-form__label">Phone number</label>
        <input
          type="text"
          className="delivery-form__input"
          value={phone}
          onChange={(e) => onPhoneChange(e.target.value)}
          placeholder="Enter your phone number"
        />
      </div>

      <div className="delivery-form__group">
        <label className="delivery-form__label">Address</label>
        <input
          type="text"
          className="delivery-form__input"
          value={address}
          onChange={(e) => onAddressChange(e.target.value)}
          placeholder="Enter your delivery address"
        />
      </div>
    </div>
  );
}