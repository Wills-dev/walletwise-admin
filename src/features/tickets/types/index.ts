import { TransactionUser, WalletTransaction } from "@/lib/types";

export interface TicketType {
  created_at: string;
  description: string;
  dispute_id: string;
  dispute_status: string;
  dispute_type: string;
  id: 407;
  transaction: WalletTransaction;
  user: TransactionUser;
}

export type SupportActivityLog = {
  id: string;
  action_type: string;
  dispute_id: number | null;
  admin_id: string;
  admin_first_name: string;
  admin_last_name: string;
  admin_email: string;
  created_at: string;
  email_sent_to: string | null;
  subject: string | null;
  message_content: string | null;
  old_status: string | null;
  new_status: string | null;
};

export type SupportSummaryAnalytics = {
  admin_id: string;
  first_name: string;
  last_name: string;
  email: string;
  average_resolution_time: string;
  total_resolved_disputes: string;
  total_views: string;
};
