import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { restaurants } from './api/restaurants'
import { menu } from './api/menu'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'local-api',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (!req.url?.startsWith('/api/')) return next()

          const path = req.url.split('?')[0]
          const qs = req.url.includes('?') ? req.url.split('?')[1] : ''
          const query = new URLSearchParams(qs)

          res.setHeader('Content-Type', 'application/json')

          if (path === '/api/restaurants') {
            return res.end(JSON.stringify(restaurants))
          }

          if (path.startsWith('/api/restaurants/')) {
            const slug = decodeURIComponent(path.replace('/api/restaurants/', ''))
            const restaurant = restaurants.find((r) => r.slug === slug)
            if (restaurant) return res.end(JSON.stringify(restaurant))
            res.statusCode = 404
            return res.end(JSON.stringify({ error: 'Restoran tapılmadı' }))
          }

          if (path === '/api/menu') {
            const restaurantId = query.get('restaurantId')
            const filtered = restaurantId
              ? menu.filter((item) => item.restaurantId === Number(restaurantId))
              : menu
            return res.end(JSON.stringify(filtered))
          }

          next()
        })
      },
    },
  ],
})
