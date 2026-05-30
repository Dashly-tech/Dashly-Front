import { create } from 'zustand'
import type { MenuItem } from '../../types/common.types'

type State = {
  menu: MenuItem[]
  loading: boolean
  error: string | null
  fetchMenu: () => Promise<void>
}

export const useMenuStore = create<State>((set, get) => ({
  menu: [],
  loading: false,
  error: null,
  fetchMenu: async () => {
    if (get().menu.length > 0) return
    set({ loading: true, error: null })
    try {
      const res = await fetch('/api/menu')
      const data: MenuItem[] = await res.json()
      set({ menu: data, loading: false })
    } catch {
      set({ error: 'Menyu yüklənmədi', loading: false })
    }
  },
}))
