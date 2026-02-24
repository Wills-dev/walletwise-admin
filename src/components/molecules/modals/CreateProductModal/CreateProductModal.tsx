import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import Label from "@/components/atoms/Label/Label";
import ModalWrapper from "@/components/atoms/ModalWrapper/ModalWrapper";

const CreateProductModal = ({
  openModal,
  setOpenModal,
  handleCreate,
  handleChange,
  product,
  isSubmitting,
}: {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  handleCreate: (e: React.FormEvent) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  product: {
    asset_id: string;
    country: string;
    currency: string;
  };
  isSubmitting: boolean;
}) => {
  const isAllFilled =
    product?.asset_id && product?.country && product?.currency;

  return (
    <ModalWrapper open={openModal} onClose={setOpenModal} title="Rating Info ">
      <div className="space-y-4">
        <form onSubmit={handleCreate} className="space-y-4">
          <div className="space-y-2">
            <Label title="Product Name" />
            <Input
              value={product?.asset_id || ""}
              type="text"
              name="asset_id"
              onChange={handleChange}
              placeholder=""
            />
          </div>
          <div className="space-y-2">
            <Label title="Currency" />
            <Input
              value={product?.currency || ""}
              type="text"
              name="currency"
              onChange={handleChange}
              placeholder=""
            />
          </div>
          <div className="space-y-2">
            <Label title="Country" />
            <Input
              value={product?.country || ""}
              type="text"
              name="country"
              onChange={handleChange}
              placeholder=""
            />
          </div>

          <div className="">
            <Button
              type="submit"
              loading={isSubmitting}
              disabled={!isAllFilled}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default CreateProductModal;
