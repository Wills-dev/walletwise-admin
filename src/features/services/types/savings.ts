export interface SavingsTransactionType {
  id: number;
  reference: string;

  first_name: string;
  last_name: string;
  user_tag: string;
  userID: string;
  user_flagged: boolean;

  amount: string;
  balance_before: string;
  balance_after: string;
  interest_rate: string;

  category: string;
  type: "credit" | "debit";
  plan_type: string;
  account_status: string;

  created_at: string;
  savings_account_id: number;
}
