import type { VercelRequest, VercelResponse } from '@vercel/node'
import type { MenuItem } from '../../src/types/common.types.ts'

const NO_IMG = '/images/notfound/imgnotadd.jpeg'

export const menu: MenuItem[] = [
  { id: 2, restaurantId: 2, name: "Classic Cheeseburger", price: 15.99, category: "Burgers", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800", isFeatured: true, showInPremiumMenu: true },
  { id: 3, restaurantId: 3, name: "Dragon Roll", price: 22.99, category: "Sushi", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800", isFeatured: true, showInPremiumMenu: true },
  { id: 5, restaurantId: 2, name: "Chocolate Cake", price: 9.99, category: "Desserts", image: "https://i.postimg.cc/wM8Q3Vby/burger-chocko.jpg" },

  // CoffeeLab desert
  { id: 148, restaurantId: 5, name: "Chocolate Cake", price: 5.0, category: "Desserts", image: NO_IMG, isFeatured: true, showInPremiumMenu: true },
]

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { restaurantId } = req.query
  const filtered = restaurantId
    ? menu.filter((item) => item.restaurantId === Number(restaurantId))
    : menu
  res.setHeader('Cache-Control', 's-maxage=3600')
  res.json(filtered)
}
