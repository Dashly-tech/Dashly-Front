import { create } from 'zustand'
import type { Restaurant } from '../../types/common.types'

type State = {
  restaurants: Restaurant[]
  loading: boolean
  error: string | null
  fetchRestaurants: () => Promise<void>
  getBySlug: (slug: string) => Restaurant | undefined
}

export const useQrRestaurantStore = create<State>((set, get) => ({
  restaurants: [],
  loading: false,
  error: null,
  fetchRestaurants: async () => {
    if (get().restaurants.length > 0) return
    set({ loading: true, error: null })
    try {
      const res = await fetch('/api/qr/restaurants')
      const data: Restaurant[] = await res.json()
      set({ restaurants: data, loading: false })
    } catch {
      set({ error: 'Məlumatlar yüklənmədi', loading: false })
    }
  },
  getBySlug: (slug) => get().restaurants.find((r) => r.slug === slug),
}))
