import { create } from "zustand";

type LocationStatus = "idle" | "loading" | "granted" | "denied";

interface LocationState {
  lat: number | null;
  lng: number | null;
  status: LocationStatus;

  setLocation: (lat: number, lng: number) => void;
  setStatus: (status: LocationStatus) => void;
  clearLocation: () => void;
}

export const useLocationStore = create<LocationState>((set) => ({
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
}));