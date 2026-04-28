import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../features/home/pages/HomePage";
import RestaurantsPage from "../../features/restaurants/pages/RestaurantsPage";
import RestaurantDetailsPage from "../../features/restaurants/pages/RestaurantDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
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
]);