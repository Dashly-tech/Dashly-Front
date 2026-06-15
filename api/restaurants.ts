import type { VercelRequest, VercelResponse } from '@vercel/node'
import type { Restaurant } from '../src/types/common.types.ts'

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Mangal döner",
    slug: "mangal-döner",
    logo: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300",
    coverImage: "https://i.postimg.cc/C1XV694M/Whats-App-Image-2026-05-14-at-20-46-34.jpg",
    description: "Best meals in town.",
    whatsappNumber: "994514081550",
    address: "Azadliq Square, Baku",
    locationText: "Azadliq Square, Baku",
    cuisineType: "Restaurant",
    isFeatured: true,
    isActive: true,
    location: { lat: 40.396297, lng: 49.839718 },
    deliveryRadiusKm: 7,
  },
  {
    id: 2,
    name: "Burger House",
    slug: "burger-house",
    logo: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300",
    coverImage: "https://i.postimg.cc/L6SMFV59/burger-house.jpg",
    description: "Juicy burgers and fries.",
    whatsappNumber: "994502222222",
    address: "Baku, 28 May",
    locationText: "28 May, Baku",
    cuisineType: "Fast Food",
    isFeatured: true,
    isActive: false,
    location: { lat: 40.4093, lng: 49.8671 },
    deliveryRadiusKm: 4,
  },
  {
    id: 3,
    name: "Sushi Lab",
    slug: "sushi-lab",
    logo: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=300",
    coverImage: "https://i.postimg.cc/g07W9FXn/suhsi.jpg",
    description: "Fresh sushi and rolls.",
    whatsappNumber: "994503333333",
    address: "Baku, Yasamal",
    locationText: "Yasamal, Baku",
    cuisineType: "Japanese",
    isFeatured: true,
    isActive: false,
    location: { lat: 40.3976, lng: 49.8574 },
    deliveryRadiusKm: 5,
  },
  {
    id: 5,
    name: "CoffeeLab",
    slug: "coffee-lab",
    logo: "https://plus.unsplash.com/premium_photo-1677607237201-64668c2266ab?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coverImage: "https://plus.unsplash.com/premium_photo-1677607237201-64668c2266ab?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Smooth coffee",
    whatsappNumber: "994771234567",
    address: "Baku, Heydar Aliyev street",
    locationText: "Arif Heyderov 128, Baku",
    cuisineType: "Azerbaijani",
    isFeatured: true,
    isActive: false,
    location: { lat: 40.4076, lng: 49.859 },
    deliveryRadiusKm: 0,
  },
]

export default function handler(_req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 's-maxage=3600')
  res.json(restaurants)
}
