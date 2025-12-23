import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2, StopCircle } from "lucide-react";

const KYCVerificationOverallStatus = ({
  overallStatus,
}: {
  overallStatus: string;
}) => {
  const isFullVerified = overallStatus === "fully_verified";
  const isPartiallyVerified = overallStatus === "partially_verified";

  const isVerified = isFullVerified || isPartiallyVerified;
  return (
    <Alert
      className={`${
        isVerified
          ? "border-emerald-500/20 bg-emerald-500/5"
          : "border-red-500/20 bg-red-500/5"
      }`}
    >
      {isVerified ? (
        <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
      ) : (
        <StopCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
      )}
      <AlertDescription className="text-emerald-700 dark:text-emerald-300">
        {isFullVerified
          ? "This account has beenfully verified and is active"
          : isPartiallyVerified
          ? "This account is partially verified"
          : "This account has not be verified."}
        .
      </AlertDescription>
    </Alert>
  );
};

export default KYCVerificationOverallStatus;
