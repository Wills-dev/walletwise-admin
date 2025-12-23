import InfoItem from "@/components/atoms/InfoItem/InfoItem";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { KYCDetails } from "@/lib/types";
import { FileCheck } from "lucide-react";

const DocumentDetailsCard = ({ kycDetails }: { kycDetails: KYCDetails }) => {
  return (
    <Card className="border-border/50 dark:bg-gray-800 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <FileCheck className="w-5 h-5" />
          Document Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-1">
        {kycDetails?.idType && (
          <InfoItem
            icon={FileCheck}
            label="ID Type"
            value={kycDetails?.idType}
          />
        )}
        {kycDetails?.idNumber && (
          <InfoItem
            icon={FileCheck}
            label="ID Number"
            value={<span className="font-mono">{kycDetails?.idNumber}</span>}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default DocumentDetailsCard;
