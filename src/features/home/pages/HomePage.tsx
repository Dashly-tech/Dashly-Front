import MainLayout from "../../../components/layout/MainLayout/MainLayout";
import HeroSection from "../components/HeroSection/HeroSection";
import HeroGallery from "../components/HeroGallery/HeroGallery";
import MenuSection from "../../menu/components/MenuSection/MenuSection";
import RestaurantShowcase from "../components/RestaurantShowcase/RestaurantShowcase";
import FeaturedDishesSection from "../components/FeaturedDishesSection/FeaturedDishesSection";
export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <HeroGallery />
      <RestaurantShowcase />


      <FeaturedDishesSection />



      <MenuSection />
    </MainLayout>
  );
}