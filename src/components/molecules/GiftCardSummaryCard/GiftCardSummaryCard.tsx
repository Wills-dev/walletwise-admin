import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { GiftCardTransaction } from "@/features/services/types";
import { ArrowRightLeft, Gift } from "lucide-react";

const GiftCardSummaryCard = ({ data }: { data: GiftCardTransaction }) => {
  const amountInCurrency = parseFloat(data?.amount_in_currency);
  const amountInNaira = parseFloat(data?.amount_in_naira);
  const fee = parseFloat(data?.fee);
  const finalAmount = parseFloat(data?.final_amount);

  return (
    <Card className="border-border/50 shadow-sm bg-linear-to-br from-primary/5 to-primary/10 dark:bg-gray-800">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg flex items-center gap-2">
              <Gift className="w-5 h-5" />
              {data?.gift_card_key} Gift Card
            </CardTitle>
            {data?.gift_card_name && (
              <CardDescription className="mt-1">
                {data?.gift_card_name}
              </CardDescription>
            )}
          </div>
          <Badge variant="secondary" className="text-xs font-mono">
            {data?.currency}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Card Value</span>
            <span className="text-2xl font-bold text-foreground">
              {data?.currency}{" "}
              {amountInCurrency.toLocaleString("en-US", {
                minimumFractionDigits: 2,
              })}
            </span>
          </div>

          <div className="p-3 rounded-lg bg-muted/50 space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground flex items-center gap-1.5">
                <ArrowRightLeft className="w-3.5 h-3.5" />
                Exchange Rate
              </span>
              <span className="text-foreground font-semibold">
                ₦{parseFloat(data?.exchange_rate).toLocaleString("en-NG")}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">NGN Equivalent</span>
              <span className="text-foreground font-bold">
                ₦
                {amountInNaira.toLocaleString("en-NG", {
                  minimumFractionDigits: 2,
                })}
              </span>
            </div>
          </div>

          {fee > 0 && (
            <>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Fee</span>
                <span className="text-foreground font-semibold">
                  ₦{fee.toLocaleString("en-NG", { minimumFractionDigits: 2 })}
                </span>
              </div>
              <Separator />
            </>
          )}

          <div className="flex justify-between items-center pt-2">
            <span className="text-sm font-medium text-muted-foreground">
              Final Amount
            </span>
            <span className="text-xl font-bold text-primary">
              ₦
              {finalAmount.toLocaleString("en-NG", {
                minimumFractionDigits: 2,
              })}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GiftCardSummaryCard;
