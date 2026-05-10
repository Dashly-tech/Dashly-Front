 export const getDeviceType = () => {
    const ua = navigator.userAgent;

    if (/Android/i.test(ua)) return "android";

    if (/iPhone|iPad|iPod/i.test(ua)) return "ios";

    return "desktop";
};