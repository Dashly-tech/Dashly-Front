
import { getDeviceType } from "../../utils/getDeviceType";
import "./LocationPermissionModal.css";
import {
    MdLocationOff,
    MdOutlineClose,
} from "react-icons/md";

type Props = {
    open: boolean;
    onClose: () => void;
};





export default function LocationPermissionModal({
    open,
    onClose,
}: Props) {
    const device = getDeviceType();




    if (!open) return null;

    return (
        <div className="location-overlay">
            <div className="location-modal">

                <button
                    className="close-btn"
                    onClick={onClose}
                >
                    <MdOutlineClose />
                </button>

                <div className="icon-wrapper">
                    <MdLocationOff className="location-icon2" />
                </div>

                <h2>Məkan Girişini Aktiv Et</h2>

                <p className="description">
                    Sizə yaxın ən yaxşı restoranları tapmaq üçün məkan məlumatınıza ehtiyacımız var.
                </p>

                <div className="guide-box">

                    {device === "desktop" && (
                        <>
                            <h4>Necə aktiv etmək olar</h4>

                            <p>
                                Ünvan sətrinin yanındakı məkan ikonuna klikləyin
                                və məkan girişinə icazə verin.
                            </p>

                            <p><b>Chrome / Edge (Windows & Mac):</b></p>
                            <p>
                                Chrome → Ayarlar → Sayt Ayarları
                                → Məkan → İcazə ver
                            </p>

                            <p><b>Safari (Mac):</b></p>
                            <p>
                                Safari → Ayarlar → Vebsaytlar → Məkan → İcazə ver
                            </p>
                        </>
                    )}

                    {device === "android" && (
                        <>
                            <h4>Android-də necə aktiv etmək olar</h4>

                            <p>
                                Chrome → Ayarlar → Sayt Ayarları
                                → Məkan → İcazə ver
                            </p>
                        </>
                    )}

                    {device === "ios" && (
                        <>
                            <h4>iPhone-da necə aktiv etmək olar</h4>

                            <p>
                                Ayarlar → Safari → Məkan
                                → İcazə ver
                            </p>
                        </>
                    )}

                </div>


            </div>
        </div>
    );
}