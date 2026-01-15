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
  status: "pending" | "success" | "failed" | "reversed";
  image_url: string | null;
  created_at: string;
  updated_at: string;
};

export type GiftCardRating = {
  id: number;
  created_at: string;
  updated_at: string;
  currency: string;
  rate: string;
  fee: string;
  is_active: boolean;
};
