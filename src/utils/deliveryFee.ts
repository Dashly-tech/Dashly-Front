import type { AreaRule } from "../config/deliveryAreas";


export function calculateDeliveryFee(
  area: AreaRule | undefined,
  total: number,
) {
  if (!area) return 0;

  if (area.isAlwaysFree) {
    return 0;
  }

  if (area.minFree === undefined) {
    return area.fee;
  }

  return total < area.minFree ? area.fee : 0;
}