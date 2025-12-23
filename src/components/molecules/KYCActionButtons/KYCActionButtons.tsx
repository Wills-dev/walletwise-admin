import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useUpdateKycStatus } from "@/lib/hooks/useUpdateKycStatus";
import { AlertCircle, CheckCircle2, XCircle } from "lucide-react";

import UpdateUserStatusModal from "../modals/UpdateUserStatusModal/UpdateUserStatusModal";

const KYCActionButtons = ({ kycId }: { kycId: string }) => {
  const {
    openModal,
    setOpenModal,
    open,
    setOpen,
    setMessage,
    message,
    isPending,
    handleSubmit,
  } = useUpdateKycStatus(kycId);

  return (
    <Card className="border-amber-500/20 bg-amber-500/5">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-1">
              Action Required
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              This KYC submission is pending verification. Review the documents
              and choose an action.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Button
                onClick={() => setOpenModal(true)}
                className="gap-2 bg-emerald-600 hover:bg-emerald-700 cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                Verify KYC
              </Button>
              <Button
                onClick={() => setOpen(true)}
                variant="destructive"
                className="gap-2 cursor-pointer"
              >
                <XCircle className="w-4 h-4" />
                Decline KYC
              </Button>
            </div>
          </div>
        </div>
        <UpdateUserStatusModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          onSubmit={(e) => handleSubmit(e, "approve")}
          isLoading={isPending}
          messageContent={message}
          setMessage={setMessage}
          title="Approve KYC"
          description="Approve this user's kyc. Ensure the user provided all the necessary documents."
        />
        <UpdateUserStatusModal
          openModal={open}
          setOpenModal={setOpen}
          onSubmit={(e) => handleSubmit(e, "decline")}
          isLoading={isPending}
          messageContent={message}
          setMessage={setMessage}
          title="Decline KYC"
          description="Decline this user's kyc. Ensure you have carefully checked all the documents provided."
        />
      </CardContent>
    </Card>
  );
};

export default KYCActionButtons;
