// src/utils/useMenu.ts

import { useEffect, useState } from "react";
import { fetchMenu } from "../services/menu.service";
import { mockMenu } from "../../../data/mockMenu"; 
import type { MenuItem } from "../../../types/common.types";

type State = {
  menu: MenuItem[];
  loading: boolean;
  error: string | null;
};

export function useMenu(): State {
  const [state, setState] = useState<State>({
    menu: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    console.log("useMenu: məlumat çəkilir...");

    fetchMenu()
      .then((data) => {
        if (data.length === 0) {
          console.warn("MOCK MENU işlədilir — Sheet boş gəldi");
          setState({ menu: mockMenu, loading: false, error: null });
        } else {
          console.log(` GOOGLE SHEETS-dən ${data.length} menu elementi gəldi:`, data);
          setState({ menu: data, loading: false, error: null });
        }
      })
      .catch(() => {
        console.error("XƏTA — MOCK MENU işlədilir");
        setState({ menu: mockMenu, loading: false, error: "Menu yüklənmədi" });
      });
  }, []);

  return state;
}