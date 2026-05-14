
import { useState } from "react";
import { mockMenu } from "../../../data/mockMenu";

type State = {
  menu: (typeof mockMenu)[number][];
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
