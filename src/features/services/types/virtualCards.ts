export type CardOwner = {
  user_id: string;
  user_tag: string;
  email: string;
  full_name: string;
};

export type VirtualCard = {
  card_id: string;
  card_name: string;
  brand: string;
  card_status: string;
  card_number: string;
  expiry: string;
  owner: CardOwner;
  created_at: string;
  creation_status: string;
  topup_count: number;
  refund_count: number;
  last_activity: string;
};

export type VirtualCardTransactionDetails = {
  fee: string;
  brand: string;
  card_id: string;
  currency: string;
  billerRef: string;
  card_name: string;
  commission: string;
  exchange_rate: number;
  provider_rate: number;
  quote_trans_id: string;
  amount_credited: string;
  amount_requested: string;
  amount_usd: string;
};

export type VirtualCardTransaction = {
  id: number;
  userID: string;
  status: string;
  type: string;
  category: string;
  amount: string;
  fee: string;
  company_commission: string;
  date: string;
  product_name: string;
  transaction_id: string;
  details: VirtualCardTransactionDetails;
  balance: string;
};

export type Card = {
  card_id: string;
  card_name: string;
  brand: string;
  card_status: string;
  card_number: string;
  expiry: string;
  currency: string;
  type: string;
  created_at: string;
  updated_at: string;
  owner: CardOwner;
};
