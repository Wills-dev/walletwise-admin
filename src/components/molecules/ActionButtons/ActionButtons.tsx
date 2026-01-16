import { useState } from "react";

import { GiftCardTransaction } from "@/features/services/types";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const ActionButtons = ({
  data,
  onRedeem,
  onDecline,
}: {
  data: GiftCardTransaction;
  onRedeem: () => void;
  onDecline: () => void;
}) => {
  const [showRedeemDialog, setShowRedeemDialog] = useState(false);
  const [showDeclineDialog, setShowDeclineDialog] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const isPending = data?.status === "pending";

  if (!isPending) return null;

  const handleRedeem = async () => {
    setIsProcessing(true);
    await onRedeem();
    setIsProcessing(false);
    setShowRedeemDialog(false);
  };

  const handleDecline = async () => {
    setIsProcessing(true);
    await onDecline();
    setIsProcessing(false);
    setShowDeclineDialog(false);
  };

  return (
    <>
      <Card className="border-amber-500/20 bg-amber-500/5 dark:bg-amber-500/10">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-1">
                Action Required
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                This gift card is pending redemption. Review the details and
                update the status.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Button
                  onClick={() => setShowRedeemDialog(true)}
                  disabled={isProcessing}
                  className="gap-2 bg-emerald-600 hover:bg-emerald-700"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  Redeem Card
                </Button>
                <Button
                  onClick={() => setShowDeclineDialog(true)}
                  disabled={isProcessing}
                  variant="destructive"
                  className="gap-2"
                >
                  <XCircle className="w-4 h-4" />
                  Decline Card
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Redeem Dialog */}
      <AlertDialog open={showRedeemDialog} onOpenChange={setShowRedeemDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              Redeem Gift Card
            </AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to redeem this gift card? The user will be
              credited with ₦
              {parseFloat(data.final_amount).toLocaleString("en-NG", {
                minimumFractionDigits: 2,
              })}
              . This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isProcessing}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleRedeem}
              disabled={isProcessing}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              {isProcessing ? "Processing..." : "Confirm Redemption"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Decline Dialog */}
      <AlertDialog open={showDeclineDialog} onOpenChange={setShowDeclineDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-600" />
              Decline Gift Card
            </AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to decline this gift card? The user will be
              notified of the rejection. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isProcessing}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDecline}
              disabled={isProcessing}
              className="bg-red-600 hover:bg-red-700"
            >
              {isProcessing ? "Processing..." : "Confirm Decline"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default ActionButtons;
