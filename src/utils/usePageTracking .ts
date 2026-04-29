declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const GA_ID = "G-S686456DD2";

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    window.gtag("config", GA_ID, {
      page_path: location.pathname,
    });
  }, [location]);
};