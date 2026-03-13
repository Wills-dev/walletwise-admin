import { EventFormValues } from "../types";

export const INITIAL_EVENT_STATE: EventFormValues = {
  title: "",
  date: "",
  time: "",
  address: "",
  description: "",
  promo: "",
  image: null,
  ticket_types: {
    Regular: {
      price: 0,
      quantity: 0,
    },
    VIP: {
      price: 0,
      quantity: 0,
    },
    Free: {
      price: 0,
      quantity: 0,
    },
  },
};

export const eventBreadcrumb = [
  { label: `Event Management`, href: `/services/events` },
  { label: "Event" },
];
