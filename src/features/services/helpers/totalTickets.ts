import { TicketTypes } from "../types";

export function totalTickets(types: TicketTypes): number {
  return Object.values(types)?.reduce((sum, t) => sum + (t?.quantity ?? 0), 0);
}
