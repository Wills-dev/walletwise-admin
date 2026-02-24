"use client";

import { useEditGiftcardCategory } from "../../hooks/useEditGiftcardCategory";

import ColumnActionDropdown from "@/components/molecules/ColumnActionDropdown/ColumnActionDropdown";
import CategoryInfoModal from "@/components/molecules/modals/CategoryInfoModal/CategoryInfoModal";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

const CategoryActionButton = ({ id }: { id: number }) => {
  const {
    openModal,
    setOpenModal,
    category,
    handleChange,
    handleEdit,
    isLoading,
    isSubmitting,
  } = useEditGiftcardCategory(id);

  return (
    <div>
      <ColumnActionDropdown>
        <DropdownMenuItem>
          <button onClick={() => setOpenModal(true)}>Update category</button>
        </DropdownMenuItem>
      </ColumnActionDropdown>
      <CategoryInfoModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        handleEdit={handleEdit}
        handleChange={handleChange}
        category={category}
        isSubmitting={isSubmitting}
        isLoading={isLoading}
      />
    </div>
  );
};

export default CategoryActionButton;
