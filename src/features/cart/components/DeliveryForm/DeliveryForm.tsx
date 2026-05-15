import { deliveryAreas } from "../../../../config/deliveryAreas";
import "./DeliveryForm.css";

type DeliveryFormProps = {
  fullName: string;
  phone: string;
  address: string;
  onFullNameChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
  onAddressChange: (value: string) => void;
  selectedArea: string;
  onAreaChange: (value: string) => void;
  restaurantName: string | null
};

export default function DeliveryForm({
  fullName,
  phone,
  address,
  onFullNameChange,
  onPhoneChange,
  onAddressChange,
  onAreaChange,
  selectedArea,
  restaurantName
}: DeliveryFormProps) {
  return (
    <div className="delivery-form">
      <h3 className="delivery-form__title">Çatdırılma məlumatları</h3>

      <div className="delivery-form__group">
        <label className="delivery-form__label">Ad və soyad</label>
        <input
          type="text"
          className="delivery-form__input"
          value={fullName}
          onChange={(e) => onFullNameChange(e.target.value)}
          placeholder="Ad və soyadınızı daxil edin"
        />
      </div>

      <div className="delivery-form__group">
        <label className="delivery-form__label">Telefon nömrəsi</label>
        <input
          type="text"
          className="delivery-form__input"
          value={phone}
          onChange={(e) => onPhoneChange(e.target.value)}
          placeholder="Telefon nömrənizi daxil edin"
        />
      </div>
      {
        restaurantName === "Mangal döner" ?
          <>
            <div className="field">
                <label className="delivery-form__label">Rayon</label>
              <select value={selectedArea} onChange={(e) => onAreaChange(e.target.value)}>
                <option value="">Rayon seçin</option>
                {deliveryAreas.map((a) => (
                  <option key={a.name} value={a.name}>
                    {a.name}
                  </option>
                ))}
              </select>

            </div>
            <div className="delivery-form__group">
              <label className="delivery-form__label">Küçə adı</label>
              <input
                type="text"
                className="delivery-form__input"
                value={address}
                onChange={(e) => onAddressChange(e.target.value)}
                placeholder="Küçə adını daxil edin"
              />
            </div>
          </>
          :
          <div className="delivery-form__group">
            <label className="delivery-form__label">Ünvan</label>
            <input
              type="text"
              className="delivery-form__input"
              value={address}
              onChange={(e) => onAddressChange(e.target.value)}
              placeholder="Çatdırılma ünvanını daxil edin"
            />
          </div>
      }


    </div>
  );
}