import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ServiceData } from "../../types";
import {
  ArrowDownLeft,
  Calendar,
  CheckCircle2,
  CreditCard,
  Hash,
  Info,
  Tag,
} from "lucide-react";
import InfoItem from "@/components/atoms/InfoItem/InfoItem";
import CategoryBadge from "@/components/atoms/CategoryBadge/CategoryBadge";
import TypeBadge from "@/components/atoms/TypeBadge/TypeBadge";
import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";

const TransactionDetailsCard = ({ data }: { data: ServiceData }) => {
  return (
    <Card className="border-border/50 dark:bg-gray-800 shadow-sm w-full col-span-1">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Info className="w-5 h-5" />
          Transaction Details
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
          icon={CreditCard}
          label="Product"
          value={<span className="capitalize">{data?.product_name}</span>}
        />
        <InfoItem
          icon={Tag}
          label="Category"
          value={
            <CategoryBadge category={data?.category} assetId={data?.asset_id} />
          }
        />
        <InfoItem
          icon={ArrowDownLeft}
          label="Type"
          value={<TypeBadge type={data?.type} />}
        />
        <InfoItem
          icon={CheckCircle2}
          label="Status"
          value={<StatusBubble status={data?.status} />}
        />
        <InfoItem
          icon={Calendar}
          label="Date"
          value={new Date(data?.date).toLocaleString("en-NG", {
            dateStyle: "medium",
            timeStyle: "medium",
          })}
        />
      </CardContent>
    </Card>
  );
};

export default TransactionDetailsCard;
