import type { VercelRequest, VercelResponse } from '@vercel/node'
import { restaurants } from '../restaurants'

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { slug } = req.query
  const restaurant = restaurants.find((r) => r.slug === slug)
  if (!restaurant) {
    return res.status(404).json({ error: 'Restoran tapılmadı' })
  }
  res.setHeader('Cache-Control', 's-maxage=3600')
  res.json(restaurant)
}
