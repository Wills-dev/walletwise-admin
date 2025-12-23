import InfoItem from "@/components/atoms/InfoItem/InfoItem";
import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";
import TierBadge from "@/components/atoms/TierBadge/TierBadge";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { KYCData } from "@/lib/types";
import { Calendar, CheckCircle2, FileCheck, Shield } from "lucide-react";

const VerificationStatusCard = ({ kycData }: { kycData: KYCData }) => {
  return (
    <Card className="border-border/50 dark:bg-gray-800 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <FileCheck className="w-5 h-5" />
          Verification Status
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-1">
        <InfoItem
          icon={Shield}
          label="BVN Status"
          value={<StatusBubble status={kycData?.bvn_status} />}
        />
        <InfoItem
          icon={Shield}
          label="NIN Status"
          value={<StatusBubble status={kycData?.nin_status} />}
        />
        <InfoItem
          icon={CheckCircle2}
          label="Identity Status"
          value={<StatusBubble status={kycData?.identity_status} />}
        />
        <InfoItem
          icon={Shield}
          label="Account Tier"
          value={<TierBadge tier={kycData?.tier} />}
        />
        {kycData?.submission_date && (
          <InfoItem
            icon={Calendar}
            label="Submission Date"
            value={new Date(kycData?.submission_date).toLocaleDateString(
              "en-NG",
              {
                dateStyle: "medium",
              }
            )}
          />
        )}
        {kycData?.verification_date && (
          <InfoItem
            icon={Calendar}
            label="Verification Date"
            value={new Date(kycData?.verification_date).toLocaleDateString(
              "en-NG",
              {
                dateStyle: "medium",
              }
            )}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default VerificationStatusCard;
