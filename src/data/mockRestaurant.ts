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

   location: {
    lat: number;
    lng: number;
  };
  deliveryRadiusKm: number;
};

export const mockRestaurants: Restaurant[] = [
  {
    id: 1,
    name: "Pizza Palace",
    slug: "pizza-palace",
    logo: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300",
    coverImage:
      "https://i.postimg.cc/kGQ3t2jS/pizza-palace.jpg",
    description: "Best Italian pizzas in town.",
    whatsappNumber: "994501111111",
    address: "Baku, Nizami street",
    locationText: "Nizami, Baku",
    cuisineType: "Italian",
    isFeatured: true,

    location: { lat: 40.3777, lng: 49.8920 },
    deliveryRadiusKm: 5,
  },
  {
    id: 2,
    name: "Burger House",
    slug: "burger-house",
    logo: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300",
    coverImage:
      "https://i.postimg.cc/L6SMFV59/burger-house.jpg",
    description: "Juicy burgers and fries.",
    whatsappNumber: "994502222222",
    address: "Baku, 28 May",
    locationText: "28 May, Baku",
    cuisineType: "Fast Food",
    isFeatured: true,

      location: { lat: 40.4093, lng: 49.8671 },
    deliveryRadiusKm: 4,
  },
  {
    id: 3,
    name: "Sushi Lab",
    slug: "sushi-lab",
    logo: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=300",
    coverImage:
      "https://i.postimg.cc/g07W9FXn/suhsi.jpg",
    description: "Fresh sushi and rolls.",
    whatsappNumber: "994503333333",
    address: "Baku, Yasamal",
    locationText: "Yasamal, Baku",
    cuisineType: "Japanese",
    isFeatured: true,

     location: { lat: 40.3976, lng: 49.8574 },
    deliveryRadiusKm: 20,
  },
  {
    id: 4,
    name: "Dadlı Dönər",
    slug: "dadli-donər",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e3d606?w=300",
    coverImage:
      "https://i.postimg.cc/NGbJ4PdS/dadli.jpg",
    description: "Delicious doner kebab.",
    whatsappNumber: "994776350039",
    address: "Baku, Heydar Aliyev street",
    locationText: "Arif Heyderov 128, Baku",
    cuisineType: "Azerbaijani",
    isFeatured: true,
    
     location: { lat: 40.4076, lng: 49.8590 },
    deliveryRadiusKm: 3,
  }
];