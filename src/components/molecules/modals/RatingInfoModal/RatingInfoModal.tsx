"use client";

import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import Label from "@/components/atoms/Label/Label";
import ModalWrapper from "@/components/atoms/ModalWrapper/ModalWrapper";
import Select from "@/components/atoms/Select/Select";

const RatingInfoModal = ({
  openModal,
  setOpenModal,
  handleEdit,
  handleChange,
  rating,
  isSubmitting,
  isLoading,
  currency,
}: {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  handleEdit: (e: React.FormEvent) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  rating: {
    rate: string | null;
    fee: string | null;
    is_active: boolean | undefined;
  };
  isSubmitting: boolean;
  isLoading: boolean;
  currency: string;
}) => {
  const isAnyFilled =
    rating.rate || rating.fee || rating.is_active !== undefined;

  return (
    <ModalWrapper open={openModal} onClose={setOpenModal} title="Rating Info ">
      <div className="space-y-4">
        {isLoading ? (
          <div className="h-48 flex justify-center items-center">
            Loading rating...
          </div>
        ) : rating ? (
          <form onSubmit={handleEdit} className="space-y-4">
            <div className="space-y-2">
              <span className="font-semibold">Currency: </span>
              {currency}
            </div>
            <div className="space-y-2">
              <Label title="Rate" />
              <Input
                value={rating?.rate || ""}
                type="text"
                name="rate"
                onChange={handleChange}
                placeholder=""
              />
            </div>
            <div className="space-y-2">
              <Label title="Fee" />
              <Input
                value={rating?.fee || ""}
                type="text"
                name="fee"
                onChange={handleChange}
                placeholder=""
              />
            </div>
            <div className="space-y-2">
              <Label title="Status" />
              <Select
                value={
                  rating?.is_active === undefined
                    ? ""
                    : rating.is_active
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
          <div>No rating info available.</div>
        )}
      </div>
    </ModalWrapper>
  );
};

export default RatingInfoModal;
