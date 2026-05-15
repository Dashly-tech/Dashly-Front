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

export const mockRestaurants: Restaurant[] = [
  {
    id: 1,
    name: "Mangal döner",
    slug: "mangal-döner",
    logo: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300",
    coverImage:
      "https://i.postimg.cc/C1XV694M/Whats-App-Image-2026-05-14-at-20-46-34.jpg",
    description: "Şəhərdə ən yaxşı yeməklər.",
    whatsappNumber: "994514081550",
    address: "Bakı, Azadlıq Meydanı",
    locationText: "Azadlıq meydanı, Bakı",
    cuisineType: "Restoran",
    isFeatured: true,
    isActive: true,
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
    description: "Şirəli burgerlər və kartof qızartması.",
    whatsappNumber: "994502222222",
    address: "Bakı, 28 May",
    locationText: "28 May, Bakı",
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
    coverImage:
      "https://i.postimg.cc/g07W9FXn/suhsi.jpg",
    description: "Təzə suşi və rollar.",
    whatsappNumber: "994503333333",
    address: "Bakı, Yasamal",
    locationText: "Yasamal, Bakı",
    cuisineType: "Yapon",
    isFeatured: true,
    isActive: false,
    location: { lat: 40.3976, lng: 49.8574 },
    deliveryRadiusKm: 5,
  },
  {
    id: 4,
    name: "Dadlı Dönər",
    slug: "dadli-donər",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e3d606?w=300",
    coverImage:
      "https://i.postimg.cc/NGbJ4PdS/dadli.jpg",
    description: "Ləzzətli dönər və kabab.",
    whatsappNumber: "994776350039",
    address: "Bakı, Heydər Əliyev küçəsi",
    locationText: "Arif Heydərov 128, Bakı",
    cuisineType: "Azərbaycan mətbəxi",
    isFeatured: true,
    isActive: true,
    location: { lat: 40.4076, lng: 49.8590 },
    deliveryRadiusKm: 5,
  },
  {
    id: 5,
    name: "CoffeeLab",
    slug: "coffee-lab",
    logo: "https://plus.unsplash.com/premium_photo-1677607237201-64668c2266ab?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coverImage:
      "https://plus.unsplash.com/premium_photo-1677607237201-64668c2266ab?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Ətirli kofe",
    whatsappNumber: "994771234567",
    address: "Bakı, Heydər Əliyev küçəsi",
    locationText: "",
    cuisineType: "Kofe",
    isFeatured: false,
    isActive: false,
    location: { lat: 40.4076, lng: 49.8590 },
    deliveryRadiusKm: 100000,
  }
];