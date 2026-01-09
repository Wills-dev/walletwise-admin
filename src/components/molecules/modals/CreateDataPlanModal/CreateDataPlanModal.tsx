import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import Label from "@/components/atoms/Label/Label";
import ModalWrapper from "@/components/atoms/ModalWrapper/ModalWrapper";
import Select from "@/components/atoms/Select/Select";

import { useGetDataPlans } from "@/features/services/hooks/useGetDataPlans";
import { CreateDataPlanType } from "@/features/services/types";

interface CreateDataPlanModalProps {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  dataPlan: CreateDataPlanType;
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  isPending: boolean;
}

const CreateDataPlanModal = ({
  openModal,
  setOpenModal,
  dataPlan,
  handleChange,
  handleSubmit,
  isPending,
}: CreateDataPlanModalProps) => {
  const { data, isLoading } = useGetDataPlans(false);

  const formOriginalDataPlan = data?.map(
    (plan: { name: string; id: number }) => ({
      label: plan?.name,
      value: plan?.id?.toString(),
    })
  );

  const isFormFilled = dataPlan?.base_plan_id && dataPlan?.fulfillment_quantity;

  return (
    <ModalWrapper
      open={openModal}
      onClose={setOpenModal}
      title="Create custom data plan"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label title="Plans" />
          {isLoading ? (
            <p className="text-sm">Loading plans...</p>
          ) : (
            <Select
              value={dataPlan.base_plan_id}
              onChange={handleChange}
              options={formOriginalDataPlan || []}
              name="base_plan_id"
              placeholder={isLoading ? "Loading plans..." : "Select plan type"}
            />
          )}
        </div>
        <div className="space-y-2">
          <Label title="Fulfillment quantity" />
          <Input
            value={dataPlan.fulfillment_quantity}
            onChange={handleChange}
            type="text"
            name="fulfillment_quantity"
            placeholder=""
          />
        </div>
        <div className="space-y-2">
          <Label title="Commission (optional)" />
          <Input
            value={dataPlan.commission}
            onChange={handleChange}
            type="text"
            name="commission"
            placeholder=""
          />
        </div>
        <Button type="submit" loading={isPending} disabled={!isFormFilled}>
          Submit
        </Button>
      </form>
    </ModalWrapper>
  );
};

export default CreateDataPlanModal;
