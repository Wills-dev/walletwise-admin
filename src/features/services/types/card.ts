export interface TransactionDetails {
  brand: string;
  ref_id: string;
  card_id: string;
  currency: string;
  trans_id: string;
  billerRef: string;
  card_name: string;
  amount_ngn: string;
  amount_usd: string;
  new_balance: string;
  prev_balance: string;
  exchange_rate: number;
  provider_rate: number;
  quote_trans_id: string;
}

export interface CardTransaction {
  id: number;
  status: string;
  type: string;
  category: string;
  amount: string;
  fee: string;
  commission: string;
  date: string;
  product_name: string;
  transaction_id: string;
  details: TransactionDetails;
  balance: string;
}
