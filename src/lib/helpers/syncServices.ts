import { Dices } from "lucide-react";
import { servicesData } from "../constants";

export const syncServices = (
  topServices: { service: string; totalAmount: number }[]
) => {
  return topServices?.map((topService) => {
    const matchedService = servicesData?.find(
      (service) =>
        service?.value?.toLowerCase() === topService?.service?.toLowerCase()
    );

    if (matchedService) {
      return {
        icon: matchedService.icon,
        label: matchedService.label,
        value: matchedService.value,
        color: matchedService.color,
        bgColor: matchedService.bgColor,
        totalAmount: topService.totalAmount,
      };
    }

    // Fallback if no match found (optional - you can handle this differently)
    return {
      icon: Dices,
      label: topService.service,
      value: topService.service,
      color: "rgba(156, 163, 175, 0.8)",
      bgColor: "rgb(249 250 251)",
      totalAmount: topService.totalAmount,
    };
  });
};
