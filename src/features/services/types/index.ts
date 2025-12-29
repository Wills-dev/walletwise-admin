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
