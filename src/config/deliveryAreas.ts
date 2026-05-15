export type AreaRule = {
  name: string;
  minFree: number;
  fee: number;
  isAlwaysFree?: boolean;
};

export const deliveryAreas: AreaRule[] = [
  { name: "Əzizbəyov", minFree: 48, fee: 7 },
  { name: "Binəqədi", minFree: 35, fee: 5 },
  { name: "Biləcəri", minFree: 40, fee: 6 },
  { name: "20 Yanvar", minFree: 28, fee: 4 },
  { name: "Yasamal", minFree: 33, fee: 4 },
  { name: "Əcəmi", minFree: 33, fee: 4 },

  {
    name: "Azadlıq",
    minFree: 0,
    fee: 0,
    isAlwaysFree: true,
  },
];