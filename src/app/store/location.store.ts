import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type LocationStatus = "idle" | "loading" | "granted" | "denied";

interface LocationState {
  lat: number | null;
  lng: number | null;
  status: LocationStatus;

  setLocation: (lat: number, lng: number) => void;
  setStatus: (status: LocationStatus) => void;
  clearLocation: () => void;
}

export const useLocationStore = create<LocationState>()(
  persist(

    (set) => ({
      lat: null,
      lng: null,
      status: "idle",

      setLocation: (lat, lng) =>
        set({
          lat,
          lng,
          status: "granted",
        }),

      setStatus: (status) => set({ status }),

      clearLocation: () =>
        set({
          lat: null,
          lng: null,
          status: "idle",
        }),

    }),

    {
      name: "location-storage",

      storage: createJSONStorage(() => sessionStorage),
    }
  )
);