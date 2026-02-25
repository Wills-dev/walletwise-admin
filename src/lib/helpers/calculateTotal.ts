import { RevenueRow, serviceType } from "../types";

export const calculateTotal = (
  revenue: RevenueRow[],
  service: serviceType,
): number => {
  return revenue.reduce((acc, curr) => {
    return acc + (curr[service] ?? 0);
  }, 0);
};
