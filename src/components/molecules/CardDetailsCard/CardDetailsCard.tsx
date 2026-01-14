import InfoItem from "@/components/atoms/InfoItem/InfoItem";
import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GiftCardTransaction } from "@/features/services/types";
import {
  Calendar,
  CheckCircle2,
  CreditCard,
  Hash,
  Key,
  User,
} from "lucide-react";

const CardDetailsCard = ({ data }: { data: GiftCardTransaction }) => {
  return (
    <Card className="border-border/50 dark:bg-gray-800 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <CreditCard className="w-5 h-5" />
          Card Details
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-1">
        <InfoItem
          icon={Hash}
          label="Transaction ID"
          value={
            <span className="font-mono text-xs">{data?.transaction_id}</span>
          }
        />
        <InfoItem
          icon={Key}
          label="Card Token"
          value={<span className="font-mono text-xs">{data?.token}</span>}
        />
        <InfoItem icon={User} label="User ID" value={data?.user_id} />
        <InfoItem
          icon={CheckCircle2}
          label="Status"
          value={<StatusBubble status={data?.status} />}
        />
        <InfoItem
          icon={Calendar}
          label="Created"
          value={new Date(data?.created_at).toLocaleString("en-NG", {
            dateStyle: "medium",
            timeStyle: "short",
          })}
        />
        <InfoItem
          icon={Calendar}
          label="Last Updated"
          value={new Date(data?.updated_at).toLocaleString("en-NG", {
            dateStyle: "medium",
            timeStyle: "short",
          })}
        />
      </CardContent>
    </Card>
  );
};

export default CardDetailsCard;
