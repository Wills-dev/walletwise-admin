import Button from "@/components/atoms/Button/Button";
import Label from "@/components/atoms/Label/Label";
import ModalWrapper from "@/components/atoms/ModalWrapper/ModalWrapper";
import Textarea from "@/components/atoms/TextArea/Textarea";

const UpdateRedeemGiftcardModa = ({
  open,
  setOpen,
  title,
  description,
  note,
  setNote,
  handleSubmit,
  isSubmitting,
  status,
}: {
  title: string;
  note: string;
  open: boolean;
  description: string;
  isSubmitting: boolean;
  setOpen: (ope: boolean) => void;
  setNote: (note: string) => void;
  handleSubmit: () => void;
  status: "failed" | "success" | "processing";
}) => {
  return (
    <ModalWrapper
      open={open}
      onClose={setOpen}
      title={title}
      description={description}
    >
      <div className="space-y-4">
        {status === "failed" && (
          <div className="">
            <Label title="Note (optional)" />
            <Textarea
              rows={5}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder=""
            />
          </div>
        )}
        <Button
          type="button"
          onClick={handleSubmit}
          loading={isSubmitting}
          disabled={isSubmitting}
        >
          Proceed
        </Button>
      </div>
    </ModalWrapper>
  );
};

export default UpdateRedeemGiftcardModa;
