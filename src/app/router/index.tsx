import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../features/home/pages/HomePage";
import RestaurantsPage from "../../features/restaurants/pages/RestaurantsPage";
import RestaurantDetailsPage from "../../features/restaurants/pages/RestaurantDetailsPage";
import LandingPage from "../../features/landing/LandingPage";
import DineinRestaurantsPage from "../../features/dine-in/pages/home/RestaurantsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    
  },
  {
    path: "/delivery-home",
    element: <HomePage />,
    
  },
  {
    path: "/restaurants",
    element: <RestaurantsPage />,
  },
  {
    path: "/restaurants/:slug",
    element: <RestaurantDetailsPage />,
  },
  {
    path: "/dishes",
    element: <DineinRestaurantsPage />,
  },
]);