import InfoItem from "@/components/atoms/InfoItem/InfoItem";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TransactionDetails } from "@/lib/types";
import {
  Building2,
  Coins,
  Hash,
  MapPin,
  MessageSquare,
  Pin,
  TriangleDashed,
  User,
  User2,
} from "lucide-react";

const ServiceDetailsCard = ({
  details,
  category,
  type,
}: {
  details: TransactionDetails;
  category: string;
  type: "debit" | "credit";
}) => {
  const isTransfer = category === "transfer";
  const isOtherService = category !== "transfer";

  return (
    <Card className="border-border/50 dark:bg-gray-800 shadow-sm w-full col-span-1">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2 capitalize">
          <MessageSquare className="w-5 h-5" />
          {category} Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-1">
        {isTransfer && (
          <>
            {details?.bankName && (
              <InfoItem
                icon={Building2}
                label="Bank"
                value={details?.bankName}
              />
            )}
            {details?.recepientAcc && (
              <InfoItem
                icon={Hash}
                label="Recipient Account"
                value={
                  <span className="font-mono">{details?.recepientAcc}</span>
                }
              />
            )}
            {details?.senderAcc && (
              <InfoItem
                icon={User}
                label="Sender Account"
                value={details?.senderAcc}
              />
            )}
            {details?.billerRef && (
              <InfoItem
                icon={User}
                label={type === "debit" ? "Recipient Name" : "Sender Name"}
                value={details?.billerRef}
              />
            )}

            {details?.remark && (
              <InfoItem
                icon={MessageSquare}
                label="Remark"
                value={details?.remark}
              />
            )}
          </>
        )}

        {isOtherService && (
          <>
            {details?.billerRef && (
              <InfoItem
                icon={TriangleDashed}
                label="Biller Ref"
                value={<span className="font-mono">{details.billerRef}</span>}
              />
            )}
            {details?.requestID && (
              <InfoItem
                icon={Hash}
                label="Request ID"
                value={
                  <span className="font-mono text-xs">
                    {details?.requestID}
                  </span>
                }
              />
            )}
            {details?.token && (
              <InfoItem
                icon={Coins}
                label="Token"
                value={
                  <span className="font-mono text-xs">{details?.token}</span>
                }
              />
            )}
            {details?.customerName && (
              <InfoItem
                icon={User2}
                label="Biller name"
                value={
                  <span className="font-mono text-xs">
                    {details?.customerName}
                  </span>
                }
              />
            )}
            {details?.customerAddress && (
              <InfoItem
                icon={MapPin}
                label="Biller Address"
                value={
                  <span className="font-mono text-xs">
                    {details?.customerAddress}
                  </span>
                }
              />
            )}
            {details?.pinNumber && (
              <InfoItem
                icon={Pin}
                label="Pin Number"
                value={
                  <span className="font-mono text-xs">
                    {details?.pinNumber}
                  </span>
                }
              />
            )}
          </>
        )}

        {/* {!isTransfer && !isAirtime && Object.keys(details).length > 0 && (
          <>
            {Object.entries(details).map(
              ([key, value]) =>
                value && (
                  <InfoRow
                    key={key}
                    icon={<Info}
                    label={key
                      .replace(/([A-Z])/g, " $1")
                      .trim()
                      .replace(/^./, (str) => str.toUpperCase())}
                    value={value}
                  />
                )
            )}
          </>
        )} */}
      </CardContent>
    </Card>
  );
};

export default ServiceDetailsCard;
