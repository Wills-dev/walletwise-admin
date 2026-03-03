"use client";

import ColumnActionDropdown from "@/components/molecules/ColumnActionDropdown/ColumnActionDropdown";
import RatingInfoModal from "@/components/molecules/modals/RatingInfoModal/RatingInfoModal";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useEditVirtualCardRating } from "../../hooks/useEditVirtualCardRating";

const RatingActionButtons = ({ id }: { id: number }) => {
  const {
    openModal,
    setOpenModal,
    handleEdit,
    handleChange,
    rating,
    isSubmitting,
    isLoading,
    ratingInfo,
  } = useEditVirtualCardRating(id);

  return (
    <>
      <ColumnActionDropdown>
        <DropdownMenuItem>
          <button onClick={() => setOpenModal(true)}>Update rating</button>
        </DropdownMenuItem>
      </ColumnActionDropdown>
      <RatingInfoModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        handleChange={handleChange}
        handleEdit={handleEdit}
        rating={rating}
        isSubmitting={isSubmitting}
        isLoading={isLoading}
        currency={ratingInfo?.currency || ""}
      />
    </>
  );
};

export default RatingActionButtons;
