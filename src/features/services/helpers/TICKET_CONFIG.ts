export const TICKET_CONFIG: Record<
  string,
  { label: string; dot: string; price: string; badge: string }
> = {
  regular: {
    label: "Regular",
    dot: "bg-red-500",
    price: "text-red-500",
    badge: "bg-red-500/10 text-red-500 border border-red-500/20",
  },
  vip: {
    label: "VIP",
    dot: "bg-amber-500",
    price: "text-amber-500",
    badge: "bg-amber-500/10 text-amber-500 border border-amber-500/20",
  },
  free: {
    label: "Free",
    dot: "bg-emerald-500",
    price: "text-emerald-500",
    badge: "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20",
  },
};
