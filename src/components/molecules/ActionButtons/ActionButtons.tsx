import { GiftCardTransaction } from "@/features/services/types";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUpdateGiftcard } from "@/features/services/hooks/useUpdateGiftcard";

import UpdateRedeemGiftcardModa from "../modals/UpdateRedeemGiftcardModa/UpdateRedeemGiftcardModa";
import { numberWithCommas } from "@/lib/helpers";

const ActionButtons = ({
  data,
  giftcardId,
}: {
  data: GiftCardTransaction;
  giftcardId: string;
}) => {
  const {
    openModal,
    setOpenModal,
    isOpenModal,
    setIsOpenModal,
    admin_notes,
    setAdmin_notes,
    handleSubmit,
    isPending: isSubmitting,
  } = useUpdateGiftcard(giftcardId);

  const isPending = data?.status === "pending";

  if (!isPending) return null;

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
                  onClick={() => setIsOpenModal(true)}
                  disabled={isSubmitting}
                  className="gap-2 bg-emerald-600 hover:bg-emerald-700"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  Redeem Card
                </Button>
                <Button
                  onClick={() => setOpenModal(true)}
                  disabled={isSubmitting}
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

      <UpdateRedeemGiftcardModa
        isSubmitting={isSubmitting}
        open={isOpenModal}
        setOpen={setIsOpenModal}
        note={admin_notes}
        setNote={setAdmin_notes}
        handleSubmit={() => handleSubmit("success")}
        title="Redeem Gift Card"
        description={`  Are you sure you want to redeem this gift card? The user will be credited with ₦${data?.final_amount && numberWithCommas(Number(data?.final_amount))}. This action cannot be undone.`}
      />
      <UpdateRedeemGiftcardModa
        isSubmitting={isSubmitting}
        open={openModal}
        setOpen={setOpenModal}
        note={admin_notes}
        setNote={setAdmin_notes}
        handleSubmit={() => handleSubmit("failed")}
        title="Decline Gift Card"
        description={`Are you sure you want to decline this gift card? The user will be
              notified of the rejection. This action cannot be undone.`}
      />
    </>
  );
};

export default ActionButtons;
