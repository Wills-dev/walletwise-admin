import Button from "@/components/atoms/Button/Button";
import Label from "@/components/atoms/Label/Label";
import ModalWrapper from "@/components/atoms/ModalWrapper/ModalWrapper";
import Textarea from "@/components/atoms/TextArea/Textarea";

const FlagUserModal = ({
  open,
  setOpen,
  handleSubmit,
  reason,
  isUpdating,
  setReason,
  isFlagged,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  handleSubmit: () => void;
  reason: string;
  isUpdating: boolean;
  setReason: (e: string) => void;
  isFlagged: boolean;
}) => {
  const isReasonFilled = !isFlagged && reason.trim() === "";

  return (
    <ModalWrapper
      open={open}
      onClose={setOpen}
      title={isFlagged ? "Unflag user acccount" : "Flag user account"}
    >
      <form>
        <div className="space-y-2">
          <Label
            title={`${!isFlagged ? "Please tell us why user is being flagged." : "Reason (optional)"}`}
          />
          <Textarea
            rows={5}
            value={reason}
            name="reason"
            onChange={(e) => setReason(e.target.value)}
          />
        </div>
        <div className="">
          <Button
            type="button"
            loading={isUpdating}
            disabled={isReasonFilled}
            onClick={handleSubmit}
          >
            Proceed
          </Button>
        </div>
      </form>
    </ModalWrapper>
  );
};

export default FlagUserModal;
