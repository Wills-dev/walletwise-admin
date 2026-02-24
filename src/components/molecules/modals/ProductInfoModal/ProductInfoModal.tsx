import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import Label from "@/components/atoms/Label/Label";
import Select from "@/components/atoms/Select/Select";
import ModalWrapper from "@/components/atoms/ModalWrapper/ModalWrapper";

const ProductInfoModal = ({
  openModal,
  setOpenModal,
  handleEdit,
  handleChange,
  product,
  isSubmitting,
  isLoading,
}: {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  handleEdit: (e: React.FormEvent) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  product: {
    asset_id: string;
    country: string;
    currency: string;
    is_active: undefined | string;
  };
  isSubmitting: boolean;
  isLoading: boolean;
}) => {
  const isAnyFilled =
    product?.asset_id ||
    product?.country ||
    product?.currency ||
    product?.is_active !== undefined;

  return (
    <ModalWrapper open={openModal} onClose={setOpenModal} title="Rating Info ">
      <div className="space-y-4">
        {isLoading ? (
          <div className="h-48 flex justify-center items-center">
            Loading product...
          </div>
        ) : product ? (
          <form onSubmit={handleEdit} className="space-y-4">
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
            <div className="space-y-2">
              <Label title="Status" />
              <Select
                value={
                  product?.is_active === undefined
                    ? ""
                    : product.is_active
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
          <div>No product info available.</div>
        )}
      </div>
    </ModalWrapper>
  );
};

export default ProductInfoModal;
