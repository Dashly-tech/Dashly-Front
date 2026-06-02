import { create } from 'zustand'
import type { MenuItem } from '../../types/common.types'

type State = {
  menu: MenuItem[]
  loading: boolean
  error: string | null
  fetchMenu: (restaurantId?: number) => Promise<void>
  getByRestaurant: (restaurantId: number) => MenuItem[]
  getCategories: (restaurantId: number) => string[]
}

export const useQrMenuStore = create<State>((set, get) => ({
  menu: [],
  loading: false,
  error: null,
  fetchMenu: async (restaurantId) => {
    if (get().menu.length > 0) return
    set({ loading: true, error: null })
    try {
      const url = restaurantId
        ? `/api/qr/menu?restaurantId=${restaurantId}`
        : '/api/qr/menu'
      const res = await fetch(url)
      const data: MenuItem[] = await res.json()
      set({ menu: data, loading: false })
    } catch {
      set({ error: 'Menyu yüklənmədi', loading: false })
    }
  },
  getByRestaurant: (restaurantId) =>
    get().menu.filter((item) => item.restaurantId === restaurantId),
  getCategories: (restaurantId) =>
    [...new Set(
      get().menu
        .filter((item) => item.restaurantId === restaurantId)
        .map((item) => item.category)
    )],
}))
