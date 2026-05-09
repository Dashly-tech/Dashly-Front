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

export type MenuItem = {
  id: number;
  restaurantId: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  isFeatured?: boolean;
  isDishOfDay?: boolean;
  showInPremiumMenu?: boolean;
};