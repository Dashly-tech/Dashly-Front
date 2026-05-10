import { useState, type ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CartDrawer from "../../shared/CartDrawer/CartDrawer";
import "./MainLayout.css";
import ScrollToTop from "../../common/ScrollToTop";
import LocationPermissionModal from "../../LocationPermissionModal/LocationPermissionModal";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  const [open,setOpen] = useState(false)
  
  return (
    <div className="main-layout">
      <ScrollToTop />
      <Navbar
       setOpen = {()=>setOpen(true)}
        />
      <main className="main-layout__content">{children}</main>
      <Footer />
      <CartDrawer />
      <LocationPermissionModal
        onClose={()=>setOpen(false)}
        open={open}
      />
    </div>
  );
}