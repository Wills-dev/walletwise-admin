import InfoItem from "@/components/atoms/InfoItem/InfoItem";
import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Transaction } from "@/features/tickets/types";

import {
  ArrowDownLeft,
  Calendar,
  CheckCircle2,
  CreditCard,
  Hash,
} from "lucide-react";

const TransactionInfoCard = ({ transaction }: { transaction: Transaction }) => {
  return (
    <Card className="border-border/50 shadow-sm dark:bg-gray-800">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <CreditCard className="w-5 h-5" />
          Transaction Details
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-1">
        <InfoItem
          icon={Hash}
          label="Transaction ID"
          value={
            <span className="font-mono text-xs">
              {transaction?.transaction_id}
            </span>
          }
        />
        <InfoItem
          icon={CreditCard}
          label="Amount"
          value={
            <span className="text-lg font-bold">
              ₦{parseFloat(transaction?.amount).toLocaleString()}
            </span>
          }
        />
        <InfoItem
          icon={ArrowDownLeft}
          label="Type"
          value={
            <span className="capitalize">
              {transaction?.type} - {transaction?.category}
            </span>
          }
        />
        <InfoItem
          icon={CheckCircle2}
          label="Status"
          value={<StatusBubble status={transaction?.status} />}
        />
        <InfoItem
          icon={Calendar}
          label="Date"
          value={new Date(transaction?.date).toLocaleString("en-NG", {
            dateStyle: "medium",
            timeStyle: "short",
          })}
        />
      </CardContent>
    </Card>
  );
};

export default TransactionInfoCard;
