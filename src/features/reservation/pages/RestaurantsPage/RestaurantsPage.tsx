import TableCard from "../../components/TableCard/TableCard";
import { reservationTables } from "../../store/reservation.store";
import "./RestaurantsPage.css";
import { useNavigate, useParams } from "react-router-dom";

const RestaurantsPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  return (
    <div className="tables_page_container">
      <h1>Masa Seçin</h1>
      <p>Seçilmiş restoran: {slug}</p>
      <div className="tables_grid">
        {reservationTables.map((table) => (
          <TableCard
            key={table.id}
            table={table}
            isSelected={false}
            onSelect={() =>
              navigate(`/reservation/restaurants/${slug}/tables/form`)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantsPage;
