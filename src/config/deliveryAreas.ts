export type AreaRule = {
  name: string;
  minFree?: number;
  fee?: number;
};

export const deliveryAreas: AreaRule[] = [
  { name: "Əzizbəyov", minFree: 48, fee: 7 },
  { name: "Binəqədi", minFree: 35, fee: 5 },
  { name: "Biləcəri", minFree: 40, fee: 6 },
  { name: "20 Yanvar", minFree: 28, fee: 4 },
  { name: "Yasamal", minFree: 33, fee: 4 },
  { name: "Əcəmi", minFree: 33, fee: 4 },

  // Free delivery areas
  { name: "Azadlıq" },
  { name: "Nərimanov" },
  { name: "Gənclik" },
  { name: "Neftçilər" },
  { name: "Xalqlar Dostluğu" },
  { name: "İnşaatçılar" },
  { name: "Elmlər Akademiyası" },
  { name: "Memar Əcəmi" },
  { name: "8 Noyabr" },
  { name: "Koroğlu" },
  { name: "Bakmil" },
  { name: "Dərnəgül" },
  { name: "Sahil" },
  { name: "İçərişəhər" },
  { name: "Əhmədli" },
  { name: "Həzi Aslanov" },
];