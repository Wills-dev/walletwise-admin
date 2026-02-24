import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import Label from "@/components/atoms/Label/Label";
import Select from "@/components/atoms/Select/Select";
import ModalWrapper from "@/components/atoms/ModalWrapper/ModalWrapper";
import { useGetGiftCardProducts } from "@/features/services/hooks/useGetGiftCardProducts";

const CategoryInfoModal = ({
  openModal,
  setOpenModal,
  handleEdit,
  handleChange,
  category,
  isSubmitting,
  isLoading,
}: {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  handleEdit: (e: React.FormEvent) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  category: {
    product_id: string;
    name: string;
    rate: string;
    is_active: undefined | string;
  };
  isSubmitting: boolean;
  isLoading: boolean;
}) => {
  const { productOptions, isLoading: isFetching } = useGetGiftCardProducts();

  const isAnyFilled =
    category?.product_id &&
    category?.name &&
    category?.rate &&
    category?.is_active !== undefined;

  return (
    <ModalWrapper
      open={openModal}
      onClose={setOpenModal}
      title="Category Info "
    >
      <div className="space-y-4">
        {isLoading ? (
          <div className="h-48 flex justify-center items-center">
            Loading category...
          </div>
        ) : category ? (
          <form onSubmit={handleEdit} className="space-y-4">
            <div className="space-y-2">
              <Label title="Product" />
              <Select
                value={category?.product_id || ""}
                name="product_id"
                onChange={handleChange}
                options={productOptions || []}
                placeholder={`${isFetching ? "Loading products..." : "Select a product"}`}
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
              <Label title="Status" />
              <Select
                value={
                  category?.is_active === undefined
                    ? ""
                    : category.is_active
                      ? "active"
                      : "inactive"
                }
                name="is_active"
                onChange={handleChange}
                options={[
                  { value: "", label: "Select Status" },
                  { value: "active", label: "Active" },
                  { value: "inactive", label: "Inactive" },
                ]}
              />
            </div>
            <div className="">
              <Button
                type="submit"
                loading={isSubmitting}
                disabled={!isAnyFilled}
              >
                Update
              </Button>
            </div>
          </form>
        ) : (
          <div>No category info available.</div>
        )}
      </div>
    </ModalWrapper>
  );
};

export default CategoryInfoModal;
