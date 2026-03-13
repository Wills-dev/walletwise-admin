export interface TransactionDetails {
  billerRef?: string;
  requestID?: string;
  remark?: string;
  bankName?: string;
  recepientAcc?: string;
  [key: string]: string | undefined;
}

export interface ServiceData {
  id: number;
  status: "success" | "failed" | "pending" | "reversed";
  type: "debit" | "credit";
  asset_id: string;
  category: string;
  amount: string;
  fee: string;
  commission: string;
  date: string;
  product_name: string;
  transaction_id: string;
  details: TransactionDetails;
  balance: string;
  initiator_email: string;
  user_id: string;
  first_name: string;
  last_name: string;
  user_email: string;
  phone_number: string;
  user_tag: string;
  user_created_at: string;
}

export interface CreateDataPlanType {
  base_plan_id: string;
  fulfillment_quantity: string;
  commission?: string;
  plan_code?: string;
  final_price?: string;
}

export interface DataPlan {
  id: number;
  name: string;
  network: string;
  provider: string;

  plan_code: string;
  variation_code: string;
  external_plan_id: string;

  volume: string;
  validity: string;

  cost: string;
  commission: string;
  final_price: string;

  fulfillment_quantity: number | null;

  is_active: boolean;
  is_custom: boolean;

  created_at: string;
  updated_at: string;
}

export type TicketType = {
  price: number;
  quantity: number;
};

export type GiftCardTransaction = {
  id: number;
  user_id: string;

  token: string;
  transaction_id: string;
  gift_card_key: string;
  gift_card_name: string | null;
  currency: string;
  amount_in_currency: string;
  amount_in_naira: string;
  exchange_rate: string;
  fee: string;
  final_amount: string;
  status: "pending" | "success" | "failed" | "reversed" | "processing";
  image_url: string | null;
  created_at: string;
  updated_at: string;
};

export type TicketTypes = {
  regular?: TicketType;
  vip?: TicketType;
  free?: TicketType;
};

export type TicketFormTypes = {
  Regular?: TicketType;
  VIP?: TicketType;
  Free?: TicketType;
};
export interface EventsType {
  id: number;
  event_id: string;
  title: string;
  date: string;
  time: string;
  address: string;
  description: string;
  promo: string;
  image_url: string;
  total_attendees: string;
  total_tickets_sold: string;
  ticket_types: TicketTypes;
  created_at: string;
}

export type TicketPurchase = {
  price: string;
  purchasedAt: string;
  ticketType: string;
  validated: boolean;
  validatedAt: null | string;
  validatedBy: null | string;
};

export interface EventsAttendeesType {
  id: number;
  event_id: string;
  confirmed_at: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  status: string;
  ticket_id: string;
  user_tag: string;
  tickets_purchased: TicketPurchase;
  user_id: string;
}

export interface EventAdminCardProps {
  data: EventsType;
  total_attendees: number;
  onEdit?: () => void;
  onDelete?: () => void;
  onToggleVisibility?: () => void;
  onViewStats?: () => void;
  onViewAttendees?: () => void;
}

export interface CreateEventPayload {
  title: string;
  date: string;
  time: string;
  address: string;
  description: string;
  promo?: string;
  image: File | null;
  ticket_types: TicketFormTypes;
}

export interface EventFormValues {
  title: string;
  date: string;
  time: string;
  address: string;
  description: string;
  promo: string;
  image: File | null;
  ticket_types: TicketFormTypes;
}

export type VirtualCardRating = {
  id: number;
  created_at: string;
  updated_at: string;
  currency: string;
  rate: string;
  provider_rate: string;
  sell_rate: string;

  fee: string;
  is_active: boolean;
};

export type GiftCardProduct = {
  id: number;
  asset_id: string;
  country: string;
  currency: string;
  is_active: true;
  created_at: string;
  updated_at: string;
};

export type GiftCardCategory = {
  id: number;
  product_id: string;
  name: string;
  rate: string;
  is_active: true;
  created_at: string;
  updated_at: string;
  asset_id: string;
  admin_rate: string;
};
