export interface AdminType {
  id: string;
  created_at: string;
  last_login?: string;
  first_name: string;
  last_name: string;
  email: string;
  role_name: string;
  status: string;
}

export interface AdminFormType {
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  phoneNumber: string;
  password: string;
  gender: string;
}

export interface UserType {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  user_tag: string;
  created_at: string;
  account_status: "active" | "unknown" | "inactive";
}

export interface WalletType {
  balance: string;
  previous_wallet_balance: string;
  daily_spend_limit: string;
  last_spend_date: string | null;
  max_balance: number;
  safehaven_total_spent: string;
}

export interface SessionType {
  userID: string;
  tokenID: string;
  deviceID: string;
  device_type: string;
  device_name: string;
  device_os: string;
  ip: string;
  expires_at: string;
  last_login: string;
  location: string;
}

export interface UserReferralType {
  id: string;
  first_name: string;
  last_name: string;
  user_tag: string;
  created_at: string;
}

export interface UserDisputeType {
  id: string;
  dispute_id: string;
  user_id: string;
  dispute_type: string;
  description: string;
  dispute_status: string;
  created_at: string;
  updated_at: string;
  product_name: string;
  category: string;
  transaction_id: string;
  transaction_date: string;
  transaction_status: string;
  transaction_type: string;
  amount: string;
}

export interface UserLogType {
  id: string;
  user_id: string;
  admin_id: string;
  action_type: string;
  details: string;
  created_at: string;
  admin_first_name: string;
  admin_last_name: string;
  admin_email: string;
}

export interface SecurityQuestionType {
  answer: string;
  question: string;
}

export type ChartConfigType = {
  count: {
    label: string;
  };
  [key: string]: {
    label: string;
    color?: string;
  };
};
