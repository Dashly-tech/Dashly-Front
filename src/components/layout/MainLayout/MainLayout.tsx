import type { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CartDrawer from "../../shared/CartDrawer/CartDrawer";
import "./MainLayout.css";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="main-layout">
      <Navbar />
      <main className="main-layout__content">{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  );
}