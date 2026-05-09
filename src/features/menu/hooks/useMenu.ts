// src/utils/useMenu.ts

import { useState } from "react";
import { mockMenu } from "../../../data/mockMenu";
import type { MenuItem } from "../../../types/common.types";

type State = {
  menu: MenuItem[];
  loading: boolean;
  error: string | null;
};

export function useMenu(): State {
  const [state] = useState<State>({
    menu: mockMenu,
    loading: false,
    error: null,
  });

  return state;
}