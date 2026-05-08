import './PaymentMethod.css'

type PaymentType = {
    paymentMethod: string,
    setPaymentMethod: (value: string) => void
}
const PaymentMethod = ({ paymentMethod, setPaymentMethod }: PaymentType) => {
    return (
        <div>
            <div className="delivery-form__group">
                <label className="delivery-form__label">Ödəniş üsulu</label>

                <div className="payment-toggle">
                    <button
                        type="button"
                        className={`payment-btn ${paymentMethod === "Nağd" ? "active" : ""}`}
                        onClick={() => setPaymentMethod("Nağd")}
                    >
                        Nağd
                    </button>

                    <button
                        type="button"
                        className={`payment-btn ${paymentMethod === "card" ? "active" : ""}`}
                        onClick={() => setPaymentMethod("card")}
                    >
                        Kart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PaymentMethod