// LocationPermissionModal.tsx

import "./LocationPermissionModal.css";
import {
    MdLocationOff,
    MdOutlineClose,
} from "react-icons/md";

type Props = {
    open: boolean;
    onClose: () => void;
};

const getDeviceType = () => {
    const ua = navigator.userAgent;

    if (/Android/i.test(ua)) return "android";

    if (/iPhone|iPad|iPod/i.test(ua)) return "ios";

    return "desktop";
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

                <h2>Enable Location Access</h2>

                <p className="description">
                    We need your location to find the best
                    restaurants near you.
                </p>

                <div className="guide-box">

                    {device === "desktop" && (
                        <>
                            <h4>How to enable</h4>

                            <p>
                                Click the location icon near the
                                address bar and allow location access.
                            </p>

                            <p>
                                Settings → Safari → Location
                                → Allow
                            </p>
                            <p>
                                Chrome → Settings → Site Settings
                                → Location → Allow
                            </p>
                        </>
                    )}

                    {device === "android" && (
                        <>
                            <h4>How to enable on Android</h4>

                            <p>
                                Chrome → Settings → Site Settings
                                → Location → Allow
                            </p>
                        </>
                    )}

                    {device === "ios" && (
                        <>
                            <h4>How to enable on iPhone</h4>

                            <p>
                                Settings → Safari → Location
                                → Allow
                            </p>
                        </>
                    )}

                </div>

                {/* <div className="modal-buttons">
          <button className="secondary-btn">
            Maybe Later
          </button>
 
          <button className="primary-btn">
            Open Settings
          </button>
        </div> */}


            </div>
        </div>
    );
}