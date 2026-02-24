import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import Label from "@/components/atoms/Label/Label";
import ModalWrapper from "@/components/atoms/ModalWrapper/ModalWrapper";
import Select from "@/components/atoms/Select/Select";
import { useGetGiftCardProducts } from "@/features/services/hooks/useGetGiftCardProducts";

const CreateCategoryModal = ({
  openModal,
  setOpenModal,
  handleCreate,
  handleChange,
  category,
  isSubmitting,
}: {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  handleCreate: (e: React.FormEvent) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  category: {
    product_id: string;
    name: string;
    rate: string;
  };
  isSubmitting: boolean;
}) => {
  const { productOptions, isLoading } = useGetGiftCardProducts();

  const isAllFilled = category?.name && category?.rate && category?.product_id;

  return (
    <ModalWrapper open={openModal} onClose={setOpenModal} title="Rating Info ">
      <div className="space-y-4">
        {isLoading ? (
          <div className="h-48 flex justify-center items-center">
            Loading product...
          </div>
        ) : (
          <form onSubmit={handleCreate} className="space-y-4">
            <div className="space-y-2">
              <Label title="Asset" />
              <Select
                value={category?.product_id || ""}
                name="product_id"
                onChange={handleChange}
                options={productOptions || []}
              />
            </div>
            <div className="space-y-2">
              <Label title="Rate" />
              <Input
                value={category?.rate || ""}
                type="text"
                name="rate"
                onChange={handleChange}
                placeholder=""
              />
            </div>
            <div className="space-y-2">
              <Label title="Name" />
              <Input
                value={category?.name || ""}
                type="text"
                name="name"
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
        )}
      </div>
    </ModalWrapper>
  );
};

export default CreateCategoryModal;
