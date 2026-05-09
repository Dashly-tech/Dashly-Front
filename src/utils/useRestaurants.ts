
// // Bu hook mövcud mockRestaurantsı əvəz edir
// //  Google Sheetsdən gəlir

// import { useEffect, useState } from "react";
// import { fetchRestaurants } from "../features/restaurants/services/restaurantService";
// import { mockRestaurants } from "../data/mockRestaurant"; 
// import type { Restaurant } from "../types/common.types";


// type State = {
//   restaurants: Restaurant[];
//   loading: boolean;
//   error: string | null;
// };

// export function useRestaurants(): State {
//   const [state, setState] = useState<State>({
//     restaurants: [],
//     loading: true,
//     error: null,
//   });
 
//   useEffect(() => {
//     console.log("useRestaurants: məlumat çəkilir...");
 
//     fetchRestaurants()
//       .then((data) => {
//         if (data.length === 0) {

//           console.warn("MOCK DATA işlədilir — Sheet boş gəldi və ya açılmadı");
//           setState({ restaurants: mockRestaurants, loading: false, error: null });
//         } else {

//           console.log(`GOOGLE SHEETS-dən ${data.length} restoran gəldi:`, data);
//           setState({ restaurants: data, loading: false, error: null });
//         }
//       })
//       .catch((err) => {
//         console.error("XƏTA MOCK DATA işlədilir:", err);
//         setState({
//           restaurants: mockRestaurants,
//           loading: false,
//           error: "Məlumatlar yüklənmədi",
//         });
//       });
//   }, []);
 
//   return state;
// }