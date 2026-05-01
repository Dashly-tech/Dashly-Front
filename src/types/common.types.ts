export type Restaurant = {
  id: number;
  name: string;
  slug: string;
  logo: string;
  coverImage: string;
  description: string;
  whatsappNumber: string;
  address: string;
  locationText: string;
  cuisineType: string;
  isFeatured?: boolean;
  isActive?: boolean;
  location: {
    lat: number;
    lng: number;
  };
  deliveryRadiusKm: number;
};