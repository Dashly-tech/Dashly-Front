import { useMenuStore } from "../../../app/store/menu.store";

export function useMenu() {
  const { menu, loading, error } = useMenuStore();
  return { menu, loading, error };
}
