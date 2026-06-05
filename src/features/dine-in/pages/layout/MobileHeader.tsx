import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button ";
import { useCartStore } from "../../../../app/store/cart.store";
interface IMobileHeaderProps {
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
  personCount: number;
  setPersonCount: (value: number) => void;
  onOpenBasket: () => void;
}
const MobileHeader = ({
  setIsOpen,
  isOpen,
  personCount,
  setPersonCount,
  onOpenBasket,
}: IMobileHeaderProps) => {
  const navigate = useNavigate();
  const totalItems = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0),
  );

  const handleOpenBasket = () => {
    setIsOpen(false);
    onOpenBasket();
  };

  const handleBrowseRestaurants = () => {
    setIsOpen(false);
    navigate("/all-restaurants");
  };
  return (
    <div>
      {isOpen && (
        <div className="mobile-overlay show" onClick={() => setIsOpen(false)} />
      )}
      <aside className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <h2 className="header__logo">Dashly</h2>
          <Button  variant="secondary" onClick={() => setIsOpen(false)}>X</Button>
        </div>

        <div className="mobile-menu-content">
          <Button
            variant="secondary"
            className={`mode-toggle ${personCount === 1 ? "active" : ""}`}
            onClick={() => setPersonCount(1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-user w-5 h-5"
              data-fg-cqpb15="1.14:1.4162:/src/app/components/Navbar.tsx:56:15:2549:28:e:User::::::wpV"
              data-fgid-cqpb15=":rc:"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>Tək nəfər</span>
          </Button>

          <Button
            variant="secondary"
            className={`mode-toggle ${personCount === 2 ? "active" : ""}`}
            onClick={() => setPersonCount(2)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-users w-5 h-5"
              data-fg-cqpb18="1.14:1.4162:/src/app/components/Navbar.tsx:69:15:3159:29:e:Users::::::DV8M"
              data-fgid-cqpb18=":re:"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span>İki nəfər</span>
          </Button>

          <Button variant="secondary" onClick={handleBrowseRestaurants}>
            <span>Bütün restoranlar</span>
          </Button>

          <Button variant="secondary" onClick={handleOpenBasket}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-shopping-cart w-5 h-5"
              data-fg-cqpb24="1.14:1.4162:/src/app/components/Navbar.tsx:82:15:3749:36:e:ShoppingCart::::::BPYc"
              data-fgid-cqpb24=":rh:"
            >
              <circle cx="8" cy="21" r="1"></circle>
              <circle cx="19" cy="21" r="1"></circle>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
            </svg>
            <span>Səbətim</span>

            {totalItems > 0 && (
              <span className="basket-badge">{totalItems}</span>
            )}
          </Button>
        </div>
      </aside>
    </div>
  );
};

export default MobileHeader;
