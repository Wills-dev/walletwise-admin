import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import Label from "@/components/atoms/Label/Label";
import ModalWrapper from "@/components/atoms/ModalWrapper/ModalWrapper";

const UpdateDataPlanCommission = ({
  openModal,
  setOpenModal,
  commission,
  setCommission,
  isPending,
  handleSubmit,
}: {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  commission: string;
  setCommission: (e: string) => void;
  isPending: boolean;
  handleSubmit: (e: React.FormEvent) => void;
}) => {
  return (
    <ModalWrapper
      open={openModal}
      onClose={setOpenModal}
      title="Update commission"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label title="Commission" />
          <Input
            value={commission}
            onChange={(e) => setCommission(e.target.value)}
            type="text"
            name="commission"
            placeholder=""
          />
        </div>
        <Button type="submit" loading={isPending} disabled={!commission}>
          Submit
        </Button>
      </form>
    </ModalWrapper>
  );
};

export default UpdateDataPlanCommission;
