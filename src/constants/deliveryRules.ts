export type DeliveryRule = {
  name: string;
  minOrder: number;
  fee: number;
};

export const deliveryRules: DeliveryRule[] = [
  { name: "Əzizbəyova", minOrder: 48, fee: 7 },
  { name: "Binəqədi", minOrder: 35, fee: 5 },
  { name: "Biləcəri", minOrder: 40, fee: 6 },
  { name: "20 Yanvar", minOrder: 28, fee: 4 },
  { name: "Yasamal", minOrder: 33, fee: 4 },
  { name: "Əcəmi", minOrder: 33, fee: 4 },
];