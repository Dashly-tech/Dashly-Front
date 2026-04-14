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
};

export const mockMenu: MenuItem[] = [
  {
    id: 1,
    restaurantId: 1,
    name: "Margherita Special",
    price: 19.99,
    category: "Pizza",
    description: "Fresh mozzarella, basil, and rich tomato sauce.",
    image: "https://i.postimg.cc/R01MjV5G/margerill.jpg",
    isFeatured: true,
    isDishOfDay: true,
  },
  {
    id: 2,
    restaurantId: 2,
    name: "Classic Cheeseburger",
    price: 15.99,
    category: "Burgers",
    description: "Juicy beef patty with cheddar and signature sauce.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800",
    isFeatured: true,
  },
  {
    id: 3,
    restaurantId: 3,
    name: "Dragon Roll",
    price: 22.99,
    category: "Sushi",
    description: "Shrimp tempura roll topped with avocado and glaze.",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800",
    isFeatured: true,
  },
  {
    id: 4,
    restaurantId: 1,
    name: "Truffle Pasta",
    price: 24.99,
    category: "Pasta",
    description: "Creamy truffle sauce with parmesan and herbs.",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800",
    isFeatured: true,
  },
  {
    id: 5,
    restaurantId: 2,
    name: "Chocolate Cake",
    price: 9.99,
    category: "Desserts",
    description: "Soft layered cake with deep chocolate flavor.",
    image: "https://i.postimg.cc/wM8Q3Vby/burger-chocko.jpg",
  },
];